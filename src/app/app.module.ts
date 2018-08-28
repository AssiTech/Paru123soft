import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule
  
  ],
  providers: [GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },],
  bootstrap: [AppComponent]
})
export class AppModule { }
