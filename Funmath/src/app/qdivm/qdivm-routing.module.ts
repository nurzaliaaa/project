import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QdivmPage } from './qdivm.page';

const routes: Routes = [
  {
    path: '',
    component: QdivmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QdivmPageRoutingModule {}
