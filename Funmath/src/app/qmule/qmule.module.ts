import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QmulePageRoutingModule } from './qmule-routing.module';

import { QmulePage } from './qmule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QmulePageRoutingModule
  ],
  declarations: [QmulePage]
})
export class QmulePageModule {}
