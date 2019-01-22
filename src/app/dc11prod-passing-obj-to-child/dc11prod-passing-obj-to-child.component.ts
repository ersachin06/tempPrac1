import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dc11prod-passing-obj-to-child',
  templateUrl: './dc11prod-passing-obj-to-child.component.html',
  styleUrls: ['./dc11prod-passing-obj-to-child.component.css']
})
export class Dc11prodPassingObjToChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  prodRating:number;
  @Output()
  prodRaingCount=new EventEmitter<any>();
  sendProdRating(prating11:number)
  {
    let prodInfo={prating11,status:"we are trying to improov"};
    this.prodRaingCount.emit(prodInfo);
  }
}
