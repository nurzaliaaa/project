import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QmulmPage } from './qmulm.page';

const routes: Routes = [
  {
    path: '',
    component: QmulmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QmulmPageRoutingModule {}
