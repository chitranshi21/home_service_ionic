import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Utils provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Utils {

  constructor(public http: Http) {
    console.log('Hello Utils Provider');
  }

  serviceShareData(serviceType:string, serviceList:Array<any>, desc: string){
  	let data = {};
  	data['serviceType'] = serviceType;
  	data['serviceList'] = serviceList;
  	data['description'] = desc;
  	return data;
  }

  serviceSharedAddressToPhone(serviceData:any, selectedCity:string,
    area:string, houseNo:string, locality:string,date:string, time:string){
    let data = {};
    data['serviceData'] = serviceData;
    data['city'] = selectedCity;
    data['area'] = area;
    data['houseNo'] = houseNo;
    data['locality'] = locality;
    data['date'] = date;
    data['time'] = time;
    return data;
  }
}
