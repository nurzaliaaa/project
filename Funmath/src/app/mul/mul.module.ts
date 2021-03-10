import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MulPageRoutingModule } from './mul-routing.module';

import { MulPage } from './mul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MulPageRoutingModule
  ],
  declarations: [MulPage]
})
export class MulPageModule {}
