import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './core/Interceptor/global.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'cube-transition' }),
    ToastrModule.forRoot(),
    SharedModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : GlobalInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
