import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { RouterModule } from '@angular/router';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { TongbutailComponent } from './components/tongbutail/tongbutail.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CintoComponent } from './components/cinto/cinto.component';
import { GossipComponent } from './components/gossip/gossip.component';
import { MembersComponent } from './components/members/members.component';
import { TaskComponent } from './components/task/task.component';
import { HometasksComponent } from './components/hometasks/hometasks.component';
import { HometongbuComponent } from './components/hometongbu/hometongbu.component';
import { HomecoursesComponent } from './components/homecourses/homecourses.component';
import { HomegossipComponent } from './components/homegossip/homegossip.component';
import { HomenotiComponent } from './components/homenoti/homenoti.component';
import { CoursetailComponent } from './components/coursetail/coursetail.component';
import { ArticleComponent } from './components/article/article.component';
import { CourvideoComponent } from './components/courvideo/courvideo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CourseComponent,
    ShequComponent,
    TongbuComponent,
    TongbutailComponent,
    TasksComponent,
    CintoComponent,
    GossipComponent,
    MembersComponent,
    TaskComponent,
    HometasksComponent,
    HometongbuComponent,
    HomecoursesComponent,
    HomegossipComponent,
    HomenotiComponent,
    CoursetailComponent,
    ArticleComponent,
    CourvideoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'hometasks',component:HometasksComponent},
        {path:'hometongbu',component:HometongbuComponent},
        {path:'homecourses',component:HomecoursesComponent},
        {path:'homegossip',component:HomegossipComponent},
        {path:'homenoti',component:HomenotiComponent},
        {path:'',redirectTo:'hometasks',pathMatch:'full'}
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbutailComponent,children:[
        {path:'tasks',component:TasksComponent},
        {path:'tasks/:taskId',component:TaskComponent},
        {path:'cinto',component:CintoComponent},
        {path:'gossip',component:GossipComponent},
        {path:'members',component:MembersComponent},
        {path:'',redirectTo:'tasks',pathMatch:'full'}
      ]},
      {path:'tasks',component:TasksComponent},
      {path:'tasks/:taskId',component:TaskComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:courseId',component:CoursetailComponent},
      {path:'shequ',component:ShequComponent},
      // {path:'article',component:ArticleComponent},
      {path:'article/:articleId',component:ArticleComponent},
      {path:'courvideo/:hcourseId',component:CourvideoComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
