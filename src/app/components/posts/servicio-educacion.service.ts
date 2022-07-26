import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostI } from './post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEducacionService {

  constructor(private http: HttpClient) { }
  //urlApi = 'https://bancariamdp.org.ar/wp-json/wp/v2/posts?filter[cat]=28';
  urlApi = 'https://bancariamdp.org.ar/wp-json/last-post/v2/category/27/numberposts/7';
  //https://bancariamdp.org.ar/wp-json/wp/v2/posts?_embed

  getPosts(): Observable<PostI[]> {
    return this.http.get<PostI[]>(this.urlApi);
  }
}
