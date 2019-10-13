import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'hesap', loadChildren: './hesap/hesap.module#HesapPageModule' },
  { path: 'kitap', loadChildren: './kitap/kitap.module#KitapPageModule' },
  { path: 'soru', loadChildren: './soru/soru.module#SoruPageModule' },
  { path: 'giris', loadChildren: './giris/giris.module#GirisPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
