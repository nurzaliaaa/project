import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QsubmPageRoutingModule } from './qsubm-routing.module';

import { QsubmPage } from './qsubm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QsubmPageRoutingModule
  ],
  declarations: [QsubmPage]
})
export class QsubmPageModule {}
