import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { ProductSpecs } from './Dto/ProductSpecs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpService: HttpClient) { }
  public updateOrder(orderId:number,deliverystatus:string) :Observable<String>
  {
      return this.httpService.put<String>('http://localhost:8003/Updatedeliverystatus/'+orderId+'/'+deliverystatus,null,{ responseType: 'text' as 'json'});
  }
  public displayOrder(distributorId:String,deliverystatus:String,startDate:String,endDate:String) :Observable<any>
  {
    return this.httpService.get<any>('http://localhost:8003/getproductorder/distributorid/'+distributorId+'/deliverystatus/'+deliverystatus+'/startDate/'+startDate+'/endDate/'+endDate);
  }
  public trackOrder(orderId:number) :Observable<any>
  {
    return this.httpService.get<any>('http://localhost:8003/trackorder/'+orderId);
  }
  public displayDistributor(distributorId:String) :Observable<any>
  {
    return this.httpService.get<any>('http://localhost:8091/GetDistributorDetail/'+distributorId);
  }
  public displaySpecs() :Observable<any>
  {
    return this.httpService.get<any>('http://localhost:8123/GetAllProductSpecs');
  }

public placedorder1(pspes:ProductSpecs,quantityvalue:number) : Observable<any>
 {
  return this.httpService.post<any>('http://localhost:8003/placeorder/'+quantityvalue,pspes,{responseType: 'text' as 'json'});
  }

}