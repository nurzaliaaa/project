import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'choose',
    loadChildren: () => import('./choose/choose.module').then( m => m.ChoosePageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
  },
  {
    path: 'addition',
    loadChildren: () => import('./addition/addition.module').then( m => m.AdditionPageModule)
  },
  {
    path: 'subs',
    loadChildren: () => import('./subs/subs.module').then( m => m.SubsPageModule)
  },
  {
    path: 'multiple',
    loadChildren: () => import('./multiple/multiple.module').then( m => m.MultiplePageModule)
  },
  {
    path: 'divide',
    loadChildren: () => import('./divide/divide.module').then( m => m.DividePageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'subt',
    loadChildren: () => import('./subt/subt.module').then( m => m.SubtPageModule)
  },
  {
    path: 'mul',
    loadChildren: () => import('./mul/mul.module').then( m => m.MulPageModule)
  },
  {
    path: 'div',
    loadChildren: () => import('./div/div.module').then( m => m.DivPageModule)
  },
  {
    path: 'qadde',
    loadChildren: () => import('./qadde/qadde.module').then( m => m.QaddePageModule)
  },
  {
    path: 'qaddm',
    loadChildren: () => import('./qaddm/qaddm.module').then( m => m.QaddmPageModule)
  },
  {
    path: 'qaddh',
    loadChildren: () => import('./qaddh/qaddh.module').then( m => m.QaddhPageModule)
  },
  {
    path: 'qsube',
    loadChildren: () => import('./qsube/qsube.module').then( m => m.QsubePageModule)
  },
  {
    path: 'qsubm',
    loadChildren: () => import('./qsubm/qsubm.module').then( m => m.QsubmPageModule)
  },
  {
    path: 'qsubh',
    loadChildren: () => import('./qsubh/qsubh.module').then( m => m.QsubhPageModule)
  },
  {
    path: 'qmule',
    loadChildren: () => import('./qmule/qmule.module').then( m => m.QmulePageModule)
  },
  {
    path: 'qmulm',
    loadChildren: () => import('./qmulm/qmulm.module').then( m => m.QmulmPageModule)
  },
  {
    path: 'qmulh',
    loadChildren: () => import('./qmulh/qmulh.module').then( m => m.QmulhPageModule)
  },
  {
    path: 'qdive',
    loadChildren: () => import('./qdive/qdive.module').then( m => m.QdivePageModule)
  },
  {
    path: 'qdivm',
    loadChildren: () => import('./qdivm/qdivm.module').then( m => m.QdivmPageModule)
  },
  {
    path: 'qdivh',
    loadChildren: () => import('./qdivh/qdivh.module').then( m => m.QdivhPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
