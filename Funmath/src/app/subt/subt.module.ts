import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtPageRoutingModule } from './subt-routing.module';

import { SubtPage } from './subt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtPageRoutingModule
  ],
  declarations: [SubtPage]
})
export class SubtPageModule {}
