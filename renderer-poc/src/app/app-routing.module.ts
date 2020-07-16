import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectToRendererGuard } from './redirect-to-renderer.guard';
import { SetRendererGuard } from './set-renderer.guard';

const routes: Routes = [
  {
    path: 'blue-hexagon',
    canActivate: [SetRendererGuard],
    data: { renderer: 'blue-hexagon' },
    loadChildren: () => import('./blue-hexagon/blue-hexagon.module').then(m => m.BlueHexagonModule)
  },
  {
    path: 'green-circle',
    canActivate: [SetRendererGuard],
    data: { renderer: 'green-circle' },
    loadChildren: () => import('./green-circle/green-circle.module').then(m => m.GreenCircleModule)
  },
  {
    path: 'pink-triangle',
    canActivate: [SetRendererGuard],
    data: { renderer: 'pink-triangle' },
    loadChildren: () => import('./pink-triangle/pink-triangle.module').then(m => m.PinkTriangleModule)
  },
  {
    path: '',
    children: [], // this is just to get Angular not to complain about this route -- it's never used
    canActivate: [RedirectToRendererGuard],
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
