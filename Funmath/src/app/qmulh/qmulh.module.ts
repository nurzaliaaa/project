import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QmulhPageRoutingModule } from './qmulh-routing.module';

import { QmulhPage } from './qmulh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QmulhPageRoutingModule
  ],
  declarations: [QmulhPage]
})
export class QmulhPageModule {}
