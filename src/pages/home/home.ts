import { Component } from '@angular/core';
import { NavController ,AlertController } from 'ionic-angular';
import {Message} from './Message';
import {Alerts} from '../../assets/alerts';
import {ChatService} from '../../services/Chat.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public message : Message[] = [];
  private sh : Alerts;
  public chat : ChatService;
  constructor(public navCtrl: NavController,public alertCtrl : AlertController) {

  }

  onMsg():void{
    this.message.push(new Message(1,"wootey","who","img","df"));
    this.sh = new Alerts(this.alertCtrl);
    this.chat = new ChatService();
    //this.sh.showAlert('ok','ok จร้า');
    console.log(this.message);
    this.chat.sendMessage("chat message","5555");
  }

  emitMsg(msg : Message){

  }
}
