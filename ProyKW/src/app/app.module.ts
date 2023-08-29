import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotaNuevaComponent } from './notaNueva/notaNueva.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [		
    AppComponent,
      NotaNuevaComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
