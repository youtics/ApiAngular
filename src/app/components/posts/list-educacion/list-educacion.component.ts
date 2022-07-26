import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from '../post.interface';
import { ServicioEducacionService } from '../servicio-educacion.service';


@Component({
  selector: 'app-list-educacion',
  templateUrl: './list-educacion.component.html',
  styleUrls: ['./list-educacion.component.css']
})
export class ListEducacionComponent implements OnInit {

  constructor(private dataWp: ServicioEducacionService) { }
  posts$: Observable<PostI[]>;

  ngOnInit() {
    this.posts$ = this.dataWp.getPosts();
    this.dataWp.getPosts().subscribe(res=> console.log(res));
  }


}
