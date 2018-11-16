import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    // ,private screenOrientation:ScreenOrientation
    ) {
    // this.screenOrientation.unlock();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToSign()
  {
    this.navCtrl.push(HomePage);
  }

}
