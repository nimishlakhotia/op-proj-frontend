import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { NoheaderComponent } from './noheader/noheader.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', component: HeaderComponent, outlet: 'header-route'},
  { path: 'login', pathMatch:'full', component: NoheaderComponent, outlet: 'header-route' },
  { path: '**', redirectTo: ''},
];

export const AppRoutingModule = RouterModule.forRoot(routes);
