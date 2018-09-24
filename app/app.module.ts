import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Child1Component } from './components/child1/child1.component';
import { Service1Service } from './services/service1.service'

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ParentComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
