import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QaddePage } from './qadde.page';

const routes: Routes = [
  {
    path: '',
    component: QaddePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QaddePageRoutingModule {}
