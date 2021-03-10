import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QdivePage } from './qdive.page';

const routes: Routes = [
  {
    path: '',
    component: QdivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QdivePageRoutingModule {}
