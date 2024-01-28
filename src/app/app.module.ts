import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DefinitionComponent } from './definition/definition.component';
import { ToastrModule } from 'ngx-toastr';
import { PhoneticComponent } from './definition/phonetic/phonetic.component';
import { MeaningsComponent } from './definition/meanings/meanings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownComponent,
    SearchBoxComponent,
    DefinitionComponent,
    PhoneticComponent,
    MeaningsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
