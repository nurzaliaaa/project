import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QaddhPageRoutingModule } from './qaddh-routing.module';

import { QaddhPage } from './qaddh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QaddhPageRoutingModule
  ],
  declarations: [QaddhPage]
})
export class QaddhPageModule {}
