import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QdivmPageRoutingModule } from './qdivm-routing.module';

import { QdivmPage } from './qdivm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QdivmPageRoutingModule
  ],
  declarations: [QdivmPage]
})
export class QdivmPageModule {}
