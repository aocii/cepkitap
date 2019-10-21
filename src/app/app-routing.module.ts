import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'giris',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  { path: 'hesap', loadChildren: './pages/hesap/hesap.module#HesapPageModule' },
  { path: 'kitap',
    children: [
      {
        path: '',
        loadChildren: './pages/kitap/kitap.module#KitapPageModule',
      },
      {
        path: ':kitapId',
        loadChildren: './pages/kitap/kitap-detay/kitap-detay.module#KitapDetayPageModule'
      }
    ]
  },
  { path: 'soru', loadChildren: './pages/soru/soru.module#SoruPageModule' },
  { path: 'giris', loadChildren: './pages/giris/giris.module#GirisPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
