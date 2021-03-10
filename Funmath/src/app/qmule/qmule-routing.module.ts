import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QmulePage } from './qmule.page';

const routes: Routes = [
  {
    path: '',
    component: QmulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QmulePageRoutingModule {}
