import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
export class ChatService {
  // Our localhost address that we set in our server code
  private url = 'http://localhost:3000'; 
  socket:any = null;
  sendMessage(ways : string,message : string){
    // Make sure the "add-message" is written here because this is referenced in on() in our server
    this.socket = io(this.url);
    console.log(this.socket);
    this.socket.emit(ways, message);   
  }
   getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);   
      });
      return () => {
        this.socket.disconnect();
      }; 
    })    
    return observable;
  } 
}