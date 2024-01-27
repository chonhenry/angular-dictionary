import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
