import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { JausmaiComponent } from './components/jausmai/jausmai.component';
import { KlausimaiComponent } from './components/klausimai/klausimai.component';
import { NaudingaComponent } from './components/naudinga/naudinga.component';
import { PagalbaComponent } from './components/pagalba/pagalba.component';
import { MesComponent } from './components/mes/mes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    JausmaiComponent,
    KlausimaiComponent,
    NaudingaComponent,
    PagalbaComponent,
    MesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
