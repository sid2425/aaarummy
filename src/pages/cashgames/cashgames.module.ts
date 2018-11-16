import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashgamesPage } from './cashgames';

@NgModule({
  declarations: [
    CashgamesPage,
  ],
  imports: [
    IonicPageModule.forChild(CashgamesPage),
  ],
})
export class CashgamesPageModule {}
