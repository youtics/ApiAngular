import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { PostComponent } from './components/posts/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListDeportesComponent } from './components/posts/list-deportes/list-deportes.component';
import { ListEducacionComponent } from './components/posts/list-educacion/list-educacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsListComponent,
    PostComponent,
    ListDeportesComponent,
    ListEducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
