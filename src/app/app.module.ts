import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QaMenuComponent } from './qa-menu/qa-menu.component';
import { QaFeedComponent } from './qa-feed/qa-feed.component';
import { PostsComponent } from './posts/posts.component';
import { PostsMenuComponent } from './posts-menu/posts-menu.component';
import { PostsFeedComponent } from './posts-feed/posts-feed.component';
import { ExpertComponent } from './expert/expert.component';
import { ExpertMenuComponent } from './expert/expert-menu/expert-menu.component';
import { ExpertFeedComponent } from './expert/expert-feed/expert-feed.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';

import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { AuthService } from './shared/auth-service';
import { PostsService } from './shared/posts.service';
import { ExpertService } from './shared/expert.service';
import { QuestionsService } from './shared/questions.service';






const appRoutes: Routes = [
  { path: '', redirectTo: '/discussions/IT/1', pathMatch: 'full' },
  { path: 'discussions', component: QuestionsComponent, children: [
    {path: '', component: QaFeedComponent},
    {path: 'IT/:sem', component: QaFeedComponent},
    {path: 'CSE/:sem', component: QaFeedComponent},
    {path: 'ECE/:sem', component: QaFeedComponent},
    {path: 'EEE/:sem', component: QaFeedComponent},
  ]},
  { path: 'discussions/:id/:question', component: AnswersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},
  { path: 'posts', component: PostsComponent, children: [
    {path: '', component: PostsFeedComponent},
    {path: 'all', component: PostsFeedComponent},
    {path: 'sample-letters', component: PostsFeedComponent},
    {path: 'sample-essays', component: PostsFeedComponent},
    {path: 'recent', component: PostsFeedComponent},
    {path: 'tips-and-tricks', component: PostsFeedComponent},
    {path: 'articles', component: PostsFeedComponent}
  ]},
  { path: 'expert/:id', component: ExpertComponent},
];

export const firebaseConfig = {

};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ConfirmEqualValidatorDirective,
    NavbarComponent,
    QaMenuComponent,
    QaFeedComponent,
    PostsComponent,
    PostsMenuComponent,
    PostsFeedComponent,
    ExpertComponent,
    ExpertMenuComponent,
    ExpertFeedComponent,
    QuestionsComponent,
    AnswersComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule ,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [RouterModule],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthService,
    PostsService,
    ExpertService,
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
