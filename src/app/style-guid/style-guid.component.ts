import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '../shared/services/websocket.service';
// import { CallService, StreamService, PeerConnectionClientSettings } from 'ngx-webrtc';

@Component({
  selector: 'app-style-guid',
  templateUrl: './style-guid.component.html',
  styleUrls: ['./style-guid.component.scss']
})
export class StyleGuidComponent {
  options: string[] = ['אביקס','אופיר2','כפתור','עמיאל', 'מרום'];

  @ViewChild('videoStreamNodePeer1', { static: false }) videoStreamNodePeer1!: ElementRef;
  @ViewChild('videoStreamNodePeer2', { static: false }) videoStreamNodePeer2!: ElementRef;

  constructor(
    private webSocketService: WebsocketService,
  ) {}


  userId!:string

  quillConfig={
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['clean'],                                         // remove formatting button
        ['link'],
      ],
      
    }
  }

  ngOnInit(): void {
  }

  onSelectionChanged = () =>{
    // if(event.oldRange == null){
    //   this.onFocus();
    // }
    // if(event.range == null){
    //   this.onBlur();
    // }
  }

  onContentChanged = () =>{
    //console.log(event.html);
  }

  onFocus = () =>{
    console.log("On Focus");
  }
  onBlur = () =>{
    console.log("Blurred");
  }

  htmlText ="<p>Testing</p>"
  

  _getAllGroups(){
    this.webSocketService.sendMessage({type: 'get_all_groups'});
  }

}
