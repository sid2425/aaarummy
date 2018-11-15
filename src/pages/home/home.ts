import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private screenOrientation: ScreenOrientation) {
  this.screenOrientation.unlock();
  console.log("Hello Landscape");
  }
 
  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  goToDashBoard(){
    // console.log("sff");
    this.navCtrl.push(DashboardPage);
  }

}
