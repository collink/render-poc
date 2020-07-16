import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenCircleRoutingModule } from './green-circle-routing.module';
import { GreenCircleComponent } from './components/green-circle/green-circle.component';
import { ItemRendererService } from '../../../projects/item-renderer/src/lib/services/item-renderer/item-renderer.service';
import { GreenCircleFactory } from './services/green-circle-factory/green-circle-factory.service';
import { GreenCircleItemComponent } from './components/green-circle-item/green-circle-item.component';


@NgModule({
  declarations: [ GreenCircleComponent, GreenCircleItemComponent ],
  imports: [
    CommonModule,
    GreenCircleRoutingModule
  ],
  providers: [
    {
      provide: 'ItemRendererService',
      useFactory: (factory: GreenCircleFactory) => (new ItemRendererService(factory)),
      deps: [ GreenCircleFactory ]
    }
  ]
})
export class GreenCircleModule {
}
