import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Approuter } from './routing.module';
import { ShelfComponent } from './shelf/shelf.component';
import { ReaderComponent } from './reader/reader.component';


@NgModule({
  declarations: [
    AppComponent,
    ShelfComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Approuter,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
