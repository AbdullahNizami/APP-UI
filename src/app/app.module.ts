import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { MainModule } from './main/main.module';
import { UIModule } from './ui/ui.module';


const routes: Routes = [

  {
    path: '',
    loadChildren: './main/main.module#MainModule'
  }





];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
