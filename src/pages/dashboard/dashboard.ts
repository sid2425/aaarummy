import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CashgamesPage } from '../cashgames/cashgames';
import { TournamentsPage } from '../tournaments/tournaments';
import { PracticePage } from '../practice/practice';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild('nav') nav:NavController;
  cashGames=CashgamesPage;
  tournaments=TournamentsPage;
  practice=PracticePage;
  profile=ProfilePage;
  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openPage(pages:any)
  {
  this.navCtrl.setRoot(pages);
  this.menuCtrl.close();
  }

}
