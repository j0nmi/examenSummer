import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponet } from './persona/persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponet } from './persona/lista.componet';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponet,
    ListaComponet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
