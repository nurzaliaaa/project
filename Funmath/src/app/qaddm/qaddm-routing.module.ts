import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QaddmPage } from './qaddm.page';

const routes: Routes = [
  {
    path: '',
    component: QaddmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QaddmPageRoutingModule {}
