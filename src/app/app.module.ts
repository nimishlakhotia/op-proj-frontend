import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppUiModule } from './app-ui.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { NoheaderComponent } from './noheader/noheader.component';
import { OpsearchComponent } from './opsearch/opsearch.component';
import { JwtInterceptor } from './_helpers/jwt.interceptors';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { OppsCardComponent } from './opps-card/opps-card.component';
import { OppsWishlistComponent } from './opps-wishlist/opps-wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    NoheaderComponent,
    OpsearchComponent,
    ProfileComponent,
    OppsCardComponent,
    OppsWishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppUiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
