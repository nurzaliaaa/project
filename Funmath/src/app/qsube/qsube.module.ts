import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QsubePageRoutingModule } from './qsube-routing.module';

import { QsubePage } from './qsube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QsubePageRoutingModule
  ],
  declarations: [QsubePage]
})
export class QsubePageModule {}
