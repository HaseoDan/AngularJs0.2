import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
//import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
//import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { ComprasComponent } from './compras/compras.component';


@NgModule({
  declarations: [
    AppComponent,
    //HeroesComponent,
    //HeroesDetailComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
