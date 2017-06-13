import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { LeftbarComponent } from './leftSidebar.component';
import { TestComponent } from './test.component';
import { DefaultComponent } from './default.component';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination

const appRoutes: Routes = [
    { path: '', component: DefaultComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'test', component: TestComponent}
];

@NgModule({
  imports:      [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      FormsModule,
      HttpModule,
      Ng2PaginationModule
  ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, LeftbarComponent, TestComponent, DefaultComponent ],
  bootstrap:    [ AppComponent, HeaderComponent, FooterComponent, LeftbarComponent, TestComponent, DefaultComponent ]
})
export class AppModule { }
