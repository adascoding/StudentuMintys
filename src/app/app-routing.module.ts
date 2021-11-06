import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JausmaiComponent } from './components/jausmai/jausmai.component';
import { KlausimaiComponent } from './components/klausimai/klausimai.component';
import { MesComponent } from './components/mes/mes.component';
import { NaudingaComponent } from './components/naudinga/naudinga.component';
import { PagalbaComponent } from './components/pagalba/pagalba.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jausmai', component: JausmaiComponent }, 
  { path: 'klausimai', component: KlausimaiComponent },
  { path: 'naudinga', component: NaudingaComponent }, 
  { path: 'pagalba', component: PagalbaComponent },
  { path: 'mes', component: MesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
