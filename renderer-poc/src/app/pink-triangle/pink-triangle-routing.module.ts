import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinkTriangleComponent } from './components/pink-triangle/pink-triangle.component';


const routes: Routes = [
  {
    path: '**',
    component: PinkTriangleComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PinkTriangleRoutingModule {
}
