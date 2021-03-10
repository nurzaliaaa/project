import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QaddmPageRoutingModule } from './qaddm-routing.module';

import { QaddmPage } from './qaddm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QaddmPageRoutingModule
  ],
  declarations: [QaddmPage]
})
export class QaddmPageModule {}
