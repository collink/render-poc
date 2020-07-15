import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueHexagonRoutingModule } from './blue-hexagon-routing.module';
import { BlueHexagonComponent } from './components/blue-hexagon/blue-hexagon.component';
import { ItemRendererService } from '../../../projects/item-renderer/src/lib/services/item-renderer/item-renderer.service';
import { BlueHexagonFactory } from './services/blue-hexagon-factory/blue-hexagon-factory.service';


@NgModule({
  declarations: [
    BlueHexagonComponent
  ],
  imports: [
    CommonModule,
    BlueHexagonRoutingModule
  ],
  providers: [
    { provide: 'ItemRendererService', useFactory: () => (new ItemRendererService(new BlueHexagonFactory())) }
  ]
})
export class BlueHexagonModule { }
