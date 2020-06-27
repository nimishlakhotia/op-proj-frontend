import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppUiModule } from './app-ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { NoheaderComponent } from './noheader/noheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    NoheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
