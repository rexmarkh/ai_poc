// Default Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Custom Modules
import { AppRoutingModule } from './modules/app-routing.module';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module'

//Components
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';

//Services
import { FetchdataService } from './services/fetchdata.service';
import { QuestionPipePipe } from './components/questions/question-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    QuestionsComponent,
    QuestionPipePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgxBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FetchdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
