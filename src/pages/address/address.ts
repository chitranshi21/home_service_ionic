import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { CityList,ADDRESS_KEY } from "../../common/enums";
import { Service } from '../../providers/service';
import { DataService } from '../../providers/data-service';
import * as moment from 'moment';
import { Utils } from "../../providers/utils";
import { NumberVerificationPage } from '../number-verification/number-verification';

/*
  Generated class for the Address page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
	@ViewChild('map') mapElement;
	map:any;
  serviceData: any;
  cityList: any[];
  selectedCity: any;
  address: any;
  city: string;
  area: string;
  houseNo: string;
  locality:string;
  date:any;
  time:any;
  scrumList: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private service: Service,
     private dataService: DataService, private utils: Utils) {
    this.cityList = CityList;
    this.getAddressFields();



  }


  ionViewDidLoad() {
    this.initMap();
    this.serviceData = this.navParams.data;
    console.log(this.serviceData);
    console.log(moment().format('LLLL'));


    this.service.getScrumData()
    .subscribe(result=>{
      result = result.filter(item => item['SCRUM-TEAM'] !== null);
      this.scrumList = result;
      console.log(this.scrumList);
    });


  }

  getAddressFields(){
    console.log("inside get address fields");
    var addressService = this.dataService.getAddressStorage();

    addressService.ready().then(()=>{
      addressService.get(ADDRESS_KEY).then((val)=>{
        console.log("this is address value ");
        console.log(val);
        if(val != null){
          this.area = val.area;
          this.houseNo = val.houseNo;
          this.locality = val.locality;
        }
      });
    });
  }

  setAddressFields(){

    let addressService = this.dataService.setAddressStorage();
    addressService.ready().then(()=>{
      var address ={} ;
      address['area'] = this.area;
      address['houseNo'] = this.houseNo;
      address['locality'] = this.locality;

      addressService.set(ADDRESS_KEY, address);
    });
  }

  initMap(){

    Geolocation.getCurrentPosition().then((position) => {
    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    let mapOptions = {
      center: latLng,
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    },(err) => {
    let toast = this.toastCtrl.create(
         {
           message: "Error In loading map",
           duration : 3000
         }
     );
      toast.present();
      console.log(err);
    }
    );

  }

  onclickNext(){
    if(!this.selectedCity || !this.area || !this.houseNo || !this.locality || !this.date || !this.time){
      let toast = this.toastCtrl.create({
        message: "Sorry! All Fields are compulsary",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      return;
    }
    if(moment(moment()).isAfter(this.date,'day')){
      let toast = this.toastCtrl.create({
        message: "Please Enter Valid Date ",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      return;
    }

    console.log(this.selectedCity,this.area,this.houseNo,this.locality,this.date,this.time);
    this.setAddressFields()
    let data = this.utils.serviceSharedAddressToPhone(this.serviceData, this.selectedCity,
      this.area, this.houseNo, this.locality, this.date, this.time);
      console.log("this is the final data ", data);
    this.navCtrl.push(NumberVerificationPage, data);
  }


}
