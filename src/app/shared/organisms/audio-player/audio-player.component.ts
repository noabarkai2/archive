import { Component, OnInit, ElementRef, ViewChild, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;
  connections: any[] = [];
  socketUrl = 'ws://localhost:7151/ws';
  audioDuration: number = 0;

  audio!: HTMLAudioElement;
  audioUrl: string = '/assets/audio.mp3';
  text: string = 'Hello World';
  isPlaying: boolean = false;
  currentTime: number = 0;
  isDragging: boolean = false;
  progressSliderValue: number = 0;
  selectedPlaybackSpeed: number = 1;
  playbackSpeedOptions: number[] = [0.5, 1, 1.5, 2];
  isDraggingCircle: boolean = false;
  totalTime: number = 0;

  groups$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  selectedGroup: string = '';

  @Input() userId: string = 'user1';

  constructor(private websocketService: WebsocketService) { }

  ngOnInit(): void {
    this.websocketService.connect(this.socketUrl).subscribe((message: any) => {
      console.log('Received message:', JSON.parse(message));
      const parsedMessage = JSON.parse(message);
      if (parsedMessage.type === 'new_connection')
        this.connections.push(parsedMessage.connection);

      else if (parsedMessage.type === 'update_position')
        this.updateAudioPosition(parsedMessage.position);

      else if (parsedMessage.type === 'update_speed')
        this.updatePlaybackSpeed(parsedMessage.speed);

      else if (parsedMessage.type === "group_list")
        this.groups$.next(parsedMessage.Keys);
      console.log(parsedMessage.Keys);
      
    });

    this.audio = new Audio(this.audioUrl);
    this.audio.addEventListener('timeupdate', () => {
      if (!this.isDragging) {
        this.currentTime = this.audio?.currentTime || 0;
        this.progressSliderValue = (this.currentTime / this.audio?.duration!) * 100;
        // this.broadcastPosition();
      }
    });

    this.audio.addEventListener('loadedmetadata', () => {
      this.totalTime = this.audio.duration;
    });

    this.addTouchListeners();
    (this.isPlaying) ? this.onPlay() : this.onPause();
  }

  ngAfterViewInit(): void {
    if (this.audioElement) {
      const audio = this.audioElement.nativeElement;
      audio.addEventListener('loadedmetadata', () => {
        this.audioDuration = audio.duration;
      });
    }
  }

  ngOnDestroy(): void {
    this.stopAndDestroyAudio();
  }

  _getAllGroups() {
    this.websocketService.sendMessage({ type: 'get_all_groups' });
  }

  joinGroup(group: string) {
    this.selectedGroup = group;
    this.websocketService.sendMessage({ type: 'join_group', userId: this.userId, groupId: group });
  }

  private stopAndDestroyAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio.load();
    }
  }

  private updateAudioPosition(position: number) {
    if (this.audio) {
      this.audio.currentTime = position;
      this.currentTime = position;
      this.progressSliderValue = (position / this.audio.duration) * 100;
    }
  }

  private updatePlaybackSpeed(speed: number) {
    if (this.audio) {
      this.audio.playbackRate = speed;
      this.selectedPlaybackSpeed = speed;
    }
  }

  private broadcastPosition() {
    const message = {
      type: 'update_position',
      position: this.audio.currentTime,
      userId: this.userId,
      groupId: this.selectedGroup,
    };
    this.websocketService.sendMessage(message);
  }

  private broadcastSpeed() {
    const message = {
      type: 'update_speed',
      userId: this.userId,
      speed: this.audio.playbackRate,
      groupId: this.selectedGroup,
    };
    this.websocketService.sendMessage(message);
  }

  onAudioClick(event: MouseEvent) {
    const audio = this.audioElement.nativeElement;
    const rect = audio.getBoundingClientRect();
    const clickPosition = (event.clientX - rect.left) / rect.width;
    const newTime = clickPosition * audio.duration;
    audio.currentTime = newTime;
    this.broadcastPosition();
  }

  onPause() {
    this.isPlaying = false;
    this.audio.pause();
    this.broadcastPosition(); // Optional: broadcast when paused
  }

  onPlay() {
    this.isPlaying = true;
    this.audio.play();
    this.broadcastPosition(); // Optional: broadcast when playing
  }

  skipBackward(): void {
    this.audio.currentTime -= 10;
    this.broadcastPosition();
  }

  skipForward(): void {
    this.audio.currentTime += 10;
    this.broadcastPosition();
  }

  changePlaybackSpeed(speed: number): void {
    this.audio.playbackRate = speed;
    this.broadcastSpeed();
  }

  togglePlaybackSpeed(): void {
    const speeds = [1, 1.5, 2];
    const currentIndex = speeds.indexOf(this.selectedPlaybackSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    this.selectedPlaybackSpeed = speeds[nextIndex];
    this.audio.playbackRate = this.selectedPlaybackSpeed;
    this.broadcastSpeed();
  }

  calculateProgress(): number {
    if (this.audio.duration) {
      return ((this.audio.currentTime / this.audio.duration) * 100);
    }
    return 0;
  }

  onProgressContainerMouseDown(event: MouseEvent): void {
    this.isDragging = true;

    const startX = event.pageX;
    const startProgress = this.progressSliderValue;

    const mouseMoveListener = (moveEvent: MouseEvent) => {
      this.updateProgressOnDrag(moveEvent, startX, startProgress);
    };

    const mouseUpListener = () => {
      this.isDragging = false;
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
    };

    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  }

  updateProgressOnDrag(event: MouseEvent, startX: number, startProgress: number): void {
    const progressContainer = document.querySelector('.progress-container') as HTMLElement;
    const containerWidth = progressContainer.offsetWidth;
    const offsetX = event.pageX - progressContainer.getBoundingClientRect().left;

    if (offsetX >= 0 && offsetX <= containerWidth) {
      this.progressSliderValue = (offsetX / containerWidth) * 100;
      const newTime = (this.progressSliderValue / 100) * this.audio.duration;
      this.audio.currentTime = newTime;
      this.broadcastPosition();
    }
  }

  addTouchListeners(): void {
    const circle = document.querySelector('.draggable-circle') as HTMLElement;

    circle.addEventListener('touchstart', (event: TouchEvent) => {
      this.onCircleTouchStart(event);
    });

    document.addEventListener('touchmove', (event: TouchEvent) => {
      if (this.isDraggingCircle) {
        this.onCircleTouchMove(event);
      }
    });

    document.addEventListener('touchend', () => {
      this.isDraggingCircle = false;
    });
  }

  onCircleTouchStart(event: TouchEvent): void {
    this.isDraggingCircle = true;
    this.updateCirclePositionOnTouch(event);
  }

  onCircleTouchMove(event: TouchEvent): void {
    this.updateCirclePositionOnTouch(event);
  }

  updateCirclePositionOnTouch(event: TouchEvent): void {
    this.updateCirclePositionOnTouchLtr(event);
  }

  updateCirclePositionOnTouchLtr(event: TouchEvent): void {
    const progressContainer = document.querySelector('.progress-container') as HTMLElement;
    const containerWidth = progressContainer.offsetWidth;
    const touchX = event.touches[0].pageX - progressContainer.getBoundingClientRect().right;

    this.progressSliderValue = ((containerWidth + touchX) / containerWidth) * 100;
    const seekTime = (this.progressSliderValue / 100) * this.audio.duration;
    this.audio.currentTime = seekTime;
    this.broadcastPosition();
  }

  updateCirclePositionOnTouchRtl(event: TouchEvent): void {
    const progressContainer = document.querySelector('.progress-container') as HTMLElement;
    const containerWidth = progressContainer.offsetWidth;
    const touchX = event.touches[0].pageX - progressContainer.getBoundingClientRect().left;

    this.progressSliderValue = ((containerWidth - touchX) / containerWidth) * 100;
    const seekTime = (this.progressSliderValue / 100) * this.audio.duration;
    this.audio.currentTime = seekTime;
    this.broadcastPosition();
  }
}