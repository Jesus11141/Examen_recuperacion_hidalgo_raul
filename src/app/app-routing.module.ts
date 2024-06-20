import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GaleryComponent } from './galery/galery.component';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [

  
  {
    path: 'galeria',
    component: GaleryComponent
  },
  {
    path: 'mensajeria',
    component: MensajeriaComponent
  },
  {
    path: 'carrusel',
    component: CarouselComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: '**',
    redirectTo: "botones"
  }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
