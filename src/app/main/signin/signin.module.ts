import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
const routes: Routes = [

{
  path: 'login',
  component: SigninComponent,

}

];


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
})
export class SigninModule { }
