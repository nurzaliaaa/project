import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QsubhPageRoutingModule } from './qsubh-routing.module';

import { QsubhPage } from './qsubh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QsubhPageRoutingModule
  ],
  declarations: [QsubhPage]
})
export class QsubhPageModule {}
