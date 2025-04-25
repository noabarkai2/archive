import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocket | undefined;
  private subject: Subject<any> | undefined;

  public connect(url: string): Subject<any> {
    if (!this.subject) {
      this.subject = new Subject<any>();
      this.socket = new WebSocket(url);

      this.socket.onmessage = (event) => {
        this.subject?.next(event.data);
      };

      this.socket.onerror = (error) => {
        this.subject?.error(error);
      };

      this.socket.onclose = () => {
        this.subject?.complete();
      };
    }
    return this.subject;
  }

  public sendMessage(message: any) {
    if (this.socket) {
      this.socket.send(JSON.stringify(message));
    }
  }
}