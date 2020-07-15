import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenCircleRoutingModule } from './green-circle-routing.module';
import { GreenCircleComponent } from './components/green-circle/green-circle.component';
import { ItemRendererService } from '../../../projects/item-renderer/src/lib/services/item-renderer/item-renderer.service';
import { GreenCircleFactory } from './services/green-circle-factory/green-circle-factory.service';


@NgModule({
  declarations: [GreenCircleComponent],
  imports: [
    CommonModule,
    GreenCircleRoutingModule
  ],
  providers: [
    { provide: 'ItemRendererService', useFactory: () => (new ItemRendererService(new GreenCircleFactory())) }
  ]
})
export class GreenCircleModule { }
