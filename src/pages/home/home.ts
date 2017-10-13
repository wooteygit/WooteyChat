import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Message} from './Message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public message : Message[] = [];

  constructor(public navCtrl: NavController) {

  }

  onMsg():void{
    
    this.message.push(new Message(1,"wootey","who","img","df"));
     console.log(this.message);
  }

  emitMsg(msg : Message){

  }
}
