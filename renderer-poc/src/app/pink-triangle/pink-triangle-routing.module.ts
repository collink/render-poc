import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinkTirangleComponent } from './components/pink-tirangle/pink-tirangle.component';


const routes: Routes = [
  {
    path: '**',
    component: PinkTirangleComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PinkTriangleRoutingModule {
}
