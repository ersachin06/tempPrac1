import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dc10rating',
  templateUrl: './dc10rating.component.html',
  styleUrls: ['./dc10rating.component.css']
})
export class Dc10ratingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  prodRating:number;
  
  @Input()
  category:any;

}
