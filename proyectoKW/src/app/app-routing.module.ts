import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasNuevasComponent } from './components/notasNuevas/notasNuevas/notasNuevas.component';
import { LogicalOperator } from 'typescript';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'notaNueva', component:NotasNuevasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
