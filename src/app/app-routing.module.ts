import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListDeportesComponent } from './components/posts/list-deportes/list-deportes.component';
import { ListEducacionComponent } from './components/posts/list-educacion/list-educacion.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts/post-list', pathMatch: 'full' },
  { path: 'posts/post-list', component: PostsListComponent },
  { path: 'posts/list-deportes', component: ListDeportesComponent },
  { path: 'posts/list-educacion', component: ListEducacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
