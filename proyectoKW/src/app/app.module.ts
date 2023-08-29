import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasNuevasComponent } from './components/notasNuevas/notasNuevas/notasNuevas.component';
import { LoginComponent } from './components/login/login/login.component';
import { ErrorComponent } from './components/error/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NotasNuevasComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
