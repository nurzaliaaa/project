import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QdivhPageRoutingModule } from './qdivh-routing.module';

import { QdivhPage } from './qdivh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QdivhPageRoutingModule
  ],
  declarations: [QdivhPage]
})
export class QdivhPageModule {}
