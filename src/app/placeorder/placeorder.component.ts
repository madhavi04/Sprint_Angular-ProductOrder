import { Component, OnInit } from '@angular/core';
import { ProductSpecs} from '../Dto/ProductSpecs'
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

productspecs:ProductSpecs;
quantity:number;
  constructor() { }

  ngOnInit(): void {
  }

}
