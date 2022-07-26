import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from '../post.interface';
import { ServicioDeportesService } from '../servicio-deportes.service';

@Component({
  selector: 'app-list-deportes',
  templateUrl: './list-deportes.component.html',
  styleUrls: ['./list-deportes.component.css']
})
export class ListDeportesComponent implements OnInit {

  constructor(private dataWp: ServicioDeportesService) { }
  posts$: Observable<PostI[]>;

  ngOnInit() {
    this.posts$ = this.dataWp.getPosts();
    this.dataWp.getPosts().subscribe(res=> console.log(res));
  }

}
