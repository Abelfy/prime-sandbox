import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cva',
    loadChildren: () => import('./cva/cva.module').then((m) => m.CvaModule),
  },
  {
    path: 'redis',
    loadChildren: () => import('./redis/redis.module').then((m) => m.RedisModule),
  },
  {
    path: 'virtual-scroll',
    loadChildren: () => import('./virtual-scroll/virtual-scroll.module').then((m) => m.VirtualScrollModule),
  },
  {
    path :'nir',
    loadChildren: () => import('./nir/nir.module').then((m) => m.NirModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
