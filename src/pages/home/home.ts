import { Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
// import { NgForms } from '@angular/forms';
// import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
//  @ViewChild('f') form: any;
  constructor(public navCtrl: NavController
    // ,private screenOrientation: ScreenOrientation
    ) {
  // this.screenOrientation.unlock();
  console.log("Hello Landscape");
  }
 
  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  onSubmit(){
// this.navCtrl.push(DashboardPage,{username:form.value.username,password:form.value.password});
    this.navCtrl.push(DashboardPage);
  }
  
  ngOnInit()
  {
    console.log("Hello");
  }
}

