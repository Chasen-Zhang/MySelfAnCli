import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AComponent } from './home/a/a.component';
import { BComponent } from './home/b/b.component';
import { Home2Component } from './home2/home2.component';
import { A2Component } from './home2/a2/a2.component';
import { B2Component } from './home2/b2/b2.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AComponent,
    BComponent,
    Home2Component,
    A2Component,
    B2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
