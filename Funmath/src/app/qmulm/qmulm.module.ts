import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QmulmPageRoutingModule } from './qmulm-routing.module';

import { QmulmPage } from './qmulm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QmulmPageRoutingModule
  ],
  declarations: [QmulmPage]
})
export class QmulmPageModule {}
