import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { UrlShortenerMainComponent } from './shared/url-shortener-main/url-shortener-main.component';

const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: '', component: UrlShortenerMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
