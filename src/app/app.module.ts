import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    IndexComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
