import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomPipe,CustomJsonPipe,FilterPipe } from './pipes/custom.pipe';
import { C8custompipesComponent } from './c8custompipes/c8custompipes.component';
import {FormsModule} from '@angular/forms';
import { Dc9prodComponent } from './dc9prod/dc9prod.component';
import { Dc10ratingComponent } from './dc10rating/dc10rating.component';
import { Dc11prodPassingObjToChildComponent } from './dc11prod-passing-obj-to-child/dc11prod-passing-obj-to-child.component';
import {RouterModule,Routes} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    CustomJsonPipe,
    FilterPipe,
    C8custompipesComponent,
    Dc9prodComponent,
    Dc10ratingComponent,
    Dc11prodPassingObjToChildComponent,
    ProductsComponent,
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent},        
        {path:'user',component:UsersComponent},
        {path:'products',component:ProductsComponent},
        {path:'dashboard',component:DashboardComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
