import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ProductOrder } from '../Dto/ProductOrder';
@Component({
  selector: 'app-displayorder',
  templateUrl: './displayorder.component.html',
  styleUrls: ['./displayorder.component.css']
})
export class DisplayorderComponent implements OnInit {
  distributorId : String;
  deliverystatus : String;
  startDate : String;
  endDate : String;
  orders: ProductOrder[] = [];
  dis: boolean=false;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
public displayOrder():void
{
  this.dis=true;
  console.log(this.startDate);
  console.log(this.endDate);
  console.log(this.distributorId);
  console.log(this.deliverystatus);

 this.service.displayOrder(this.distributorId,this.deliverystatus,this.startDate,this.endDate).subscribe(data =>{
                                                        for(var i of data.orders)
                                                        {
                                                            this.orders.push(i);
                                                        }
                                                        console.log(data.orders);
 }); 
}
}