import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DividePageRoutingModule } from './divide-routing.module';

import { DividePage } from './divide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DividePageRoutingModule
  ],
  declarations: [DividePage]
})
export class DividePageModule {}
