import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QdivhPage } from './qdivh.page';

const routes: Routes = [
  {
    path: '',
    component: QdivhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QdivhPageRoutingModule {}
