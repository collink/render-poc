import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenCircleComponent } from './components/green-circle/green-circle.component';


const routes: Routes = [
  {
    path: '**',
    component: GreenCircleComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GreenCircleRoutingModule {
}
