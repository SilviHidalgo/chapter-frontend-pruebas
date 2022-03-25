import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-personajes',
  templateUrl: './crear-personajes.component.html',
  styleUrls: ['./crear-personajes.component.css']
})
export class ListadoPersonajesComponent {

  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
    console.log(this.data);
  }


  }