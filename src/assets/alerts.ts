import { AlertController } from 'ionic-angular';

export class Alerts{
  constructor(public alertCtrl : AlertController){}

  showAlert(title : string ,subTitle :  string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  showConfirm(title : string ,message : string ,disagree : Function , agree : Function) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Disagree',
          handler: disagree()
        },
        {
          text: 'Agree',
          handler: agree()
        }
      ]
    });
    confirm.present();
  }
}