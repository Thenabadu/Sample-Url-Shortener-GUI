import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShortenerService }from'./service/shortener.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UrlShortenerMainComponent } from './shared/url-shortener-main/url-shortener-main.component';
import { ErrorComponent } from './shared/error/error.component';
import { GeneratedUrlComponent } from './shared/generated-url/generated-url.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    UrlShortenerMainComponent,
    GeneratedUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShortenerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
