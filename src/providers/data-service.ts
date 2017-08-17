import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';




/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {
	

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello DataService Provider');
  }

  getAddressStorage(){
  	return this.storage;
  }

  setAddressStorage(){
  	return this.storage;
  }

  getPhoneNumber(){
    return this.storage;
  }

  setPhoneNumber(){
    return this.storage;
  }

}
