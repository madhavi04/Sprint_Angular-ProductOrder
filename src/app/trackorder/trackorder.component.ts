import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ServiceService} from '../service.service';
import { ProductOrder } from '../Dto/ProductOrder';
@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.css']
})
export class TrackorderComponent implements OnInit {
orderId:number;
  dis: boolean=false;
  order: ProductOrder[] = [];
  orders: any;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  public trackOrder():void
  {
    this.dis=true;
    console.log(this.orderId);
    this.service.trackOrder(this.orderId).subscribe(data => this.orders=data);
    
  }

}
