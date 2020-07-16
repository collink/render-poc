import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinkTriangleRoutingModule } from './pink-triangle-routing.module';
import { PinkTriangleComponent } from './components/pink-triangle/pink-triangle.component';
import { ItemRendererService } from '../../../projects/item-renderer/src/lib/services/item-renderer/item-renderer.service';
import { PinkTriangleFactory } from './services/pink-triangle/pink-triangle-factory.service';
import { PinkTriangleItemComponent } from './components/pink-triangle-item/pink-triangle-item.component';


@NgModule({
  declarations: [ PinkTriangleComponent, PinkTriangleItemComponent ],
  imports: [
    CommonModule,
    PinkTriangleRoutingModule
  ],
  providers: [
    {
      provide: 'ItemRendererService',
      useFactory: (factory: PinkTriangleFactory) => (new ItemRendererService(factory)),
      deps: [ PinkTriangleFactory ]
    }
  ]
})
export class PinkTriangleModule {
}
