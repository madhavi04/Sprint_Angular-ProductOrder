import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { DisplayDistributorDetails } from '../Dto/DisplayDistributorDetails';

@Component({
  selector: 'app-displaydistributor',
  templateUrl: './displaydistributor.component.html',
  styleUrls: ['./displaydistributor.component.css']
})
export class DisplaydistributorComponent implements OnInit {
distributorId: string;
order: DisplayDistributorDetails[] = [];
  dis: boolean=false;
  orders: any;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
public displayDistributor(): void
{
this.dis=true;
console.log(this.distributorId);
this.service.displayDistributor(this.distributorId).subscribe(data => this.orders=data);
  
}
}
