import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { FigurineTypeColorPipe } from './figurine/figurine-type-color.pipe';
import { ListFigurineComponent } from './list-figurine/list-figurine.component';
import { DetailFigurineComponent } from './detail-figurine/detail-figurine.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    FigurineTypeColorPipe,
    ListFigurineComponent,
    DetailFigurineComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
