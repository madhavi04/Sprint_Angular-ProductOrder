import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { ProductSpecs } from '../Dto/ProductSpecs';

@Component({
  selector: 'app-productspecs',
  templateUrl: './productspecs.component.html',
  styleUrls: ['./productspecs.component.css']
})
export class ProductspecsComponent implements OnInit {
  dis: boolean=false;
  orders: ProductSpecs[] = [];
  renderer:boolean = false;
  pspes:ProductSpecs;
  quantityvalue : number;
 
  
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  public displaySpecs():void
  {
 this.dis=true;
 this.service.displaySpecs().subscribe(data =>{
  for(var i of data)
  {
      this.orders.push(i);
  }
  console.log(data);
}); 
  }
public orderPlaced(pspes:ProductSpecs):void
  {
    this.pspes = pspes;
    this.renderer = true;
  }

  public placedorder():void
  {
    this.service.placedorder1(this.pspes,this.quantityvalue).subscribe(data => console.log(data));
 }
}

