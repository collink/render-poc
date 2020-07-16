import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueHexagonRoutingModule } from './blue-hexagon-routing.module';
import { BlueHexagonComponent } from './components/blue-hexagon/blue-hexagon.component';
import { ItemRendererService } from '../../../projects/item-renderer/src/lib/services/item-renderer/item-renderer.service';
import { BlueHexagonFactory } from './services/blue-hexagon-factory/blue-hexagon-factory.service';
import { BlueHexagonItemComponent } from './components/blue-hexagon-item/blue-hexagon-item.component';


@NgModule({
  declarations: [
    BlueHexagonComponent,
    BlueHexagonItemComponent
  ],
  imports: [
    CommonModule,
    BlueHexagonRoutingModule
  ],
  bootstrap: [
    BlueHexagonComponent
  ],
  providers: [
    {
      provide: 'ItemRendererService',
      useFactory: (factory: BlueHexagonFactory) => (new ItemRendererService(factory)),
      deps: [ BlueHexagonFactory ]
    }
  ]
})
export class BlueHexagonModule { }
