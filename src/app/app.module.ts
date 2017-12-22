// Default Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Custom Modules
import { AppRoutingModule } from './modules/app-routing.module';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module'

//Components
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';

//
import { FetchdataService } from './services/fetchdata.service';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgxBootstrapModule
  ],
  providers: [
    FetchdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
