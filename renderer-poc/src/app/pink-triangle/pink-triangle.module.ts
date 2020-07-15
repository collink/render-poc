import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinkTriangleRoutingModule } from './pink-triangle-routing.module';
import { PinkTirangleComponent } from './components/pink-tirangle/pink-tirangle.component';
import { ItemRendererService } from '../../../projects/item-renderer/src/lib/services/item-renderer/item-renderer.service';
import { PinkTriangleFactory } from './services/pink-triangle/pink-triangle-factory.service';


@NgModule({
  declarations: [PinkTirangleComponent],
  imports: [
    CommonModule,
    PinkTriangleRoutingModule
  ],
  providers: [
    { provide: 'ItemRendererService', useFactory: () => (new ItemRendererService(new PinkTriangleFactory())) }
  ]
})
export class PinkTriangleModule { }
