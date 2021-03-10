import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QdivePageRoutingModule } from './qdive-routing.module';

import { QdivePage } from './qdive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QdivePageRoutingModule
  ],
  declarations: [QdivePage]
})
export class QdivePageModule {}
