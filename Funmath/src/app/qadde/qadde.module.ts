import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QaddePageRoutingModule } from './qadde-routing.module';

import { QaddePage } from './qadde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QaddePageRoutingModule
  ],
  declarations: [QaddePage]
})
export class QaddePageModule {}
