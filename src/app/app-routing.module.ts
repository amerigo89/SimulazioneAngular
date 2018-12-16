import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpiegatiComponent } from './impiegati/impiegati.component';


const routes: Routes = [
  { path: 'impiegati', component: ImpiegatiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
