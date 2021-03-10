import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QmulhPage } from './qmulh.page';

const routes: Routes = [
  {
    path: '',
    component: QmulhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QmulhPageRoutingModule {}
