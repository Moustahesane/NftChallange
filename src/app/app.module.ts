import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { OpenSeaServiceService } from './services/open-sea-service.service';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { HeroCollectionComponent } from './components/hero-collection/hero-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionCardComponent,
    CollectionListComponent,
    HeroCollectionComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [OpenSeaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
