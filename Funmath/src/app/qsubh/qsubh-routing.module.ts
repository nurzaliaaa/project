import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QsubhPage } from './qsubh.page';

const routes: Routes = [
  {
    path: '',
    component: QsubhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QsubhPageRoutingModule {}
