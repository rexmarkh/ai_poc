import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AppComponent } from '../app.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { HomeComponent } from '../components/home/home.component';
import { QuestionsComponent } from '../components/questions/questions.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  { 
    path: '404',
    component: PagenotfoundComponent
  },
  { 
    path: '**',
    redirectTo: '/404' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
