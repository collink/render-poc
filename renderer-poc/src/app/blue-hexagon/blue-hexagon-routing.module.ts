import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueHexagonComponent } from './components/blue-hexagon/blue-hexagon.component';


const routes: Routes = [
  {
    path: '**',
    component: BlueHexagonComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BlueHexagonRoutingModule {
}
