import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NotasNuevasComponent } from './components/notasNuevas/notasNuevas/notasNuevas.component';
import { LoginComponent } from './components/login/login/login.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ErrorComponent } from './components/error/error/error.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'notaNueva', component:NotasNuevasComponent},
  {path:'reportes', component:ReportesComponent},
  {path:'**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
