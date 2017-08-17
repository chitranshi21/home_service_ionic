import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {

  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }

  getScrumData(): Observable<any[]>{
  return this.http.get("http://localhost:3000/scrums")
  	.map(res => res.json())
  	// .catch(this.handleError);
  }

  private handleError(error: Response | any){
  	let errorMsg : string;
  	if(error instanceof Response){
  		const body = error.json() || '';
  		const err = body.error || JSON.stringify(body);
  		errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  	}
  	else{
  		errorMsg = error.message ? error.message : error.toString();
  	}
  	console.error(errorMsg);
  	return Observable.throw(errorMsg);
    
  }

}
