import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { ElectricalEnum,Service } from "../../common/enums"; 
import { AddressPage } from "../address/address";
import { Utils } from "../../providers/utils";
/*
  Generated class for the Electrical page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-electrical',
  templateUrl: 'electrical.html'
})
export class ElectricalPage {
	electricalServiceList:Array<{name:string,component:Array<ElectricalEnum>,
								selectedList:Array<string>}>;
	selectedList: Array<string>;
  description:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController, public utils:Utils) {
  	this.electricalServiceList = [];
  	this.electricalServiceList.push(
  				{
  					name: "Fans",
  					component: [
  						ElectricalEnum.CEILING_FAN,
  						ElectricalEnum.EXHAUST_FAN,
  						ElectricalEnum.STAND_FAN
  					],
  					selectedList: []
  				},
  				{
  					name: "Switches, Meters and Fuses",
  					component: [
  						ElectricalEnum.MCB,
  						ElectricalEnum.NEW_ELECTRIC_POINT,
  						ElectricalEnum.THREE_PHASE_PANNEL_BOARD
  					],
  					selectedList: []
  				},
  				{
  					name: "Lights and Wiring",
  					component: [
  						ElectricalEnum.TUBE_LIGHT_WITH_PANNEL,
  						ElectricalEnum.FANCY_LIGHT,
  						ElectricalEnum.SOCKET_AND_HOLDERS,
  						ElectricalEnum.WIRING
  					],
  					selectedList: []
  				},
  				{
  					name: "Others",
  					component: [
  						ElectricalEnum.INVERTER,
  						ElectricalEnum.OTHERS,
  					],
  					selectedList: []
  				},
  		)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectricalPage');
    this.selectedList = [];
  }

  updateSelectedList(){
  	this.selectedList = [];
  	for(let service of this.electricalServiceList){
  		for(let comp of service.selectedList){
  			this.selectedList.push(comp);
  		}
  	}
  	console.log(this.selectedList);
  }

  onclickNext(){
    if(this.selectedList.length == 0){
      let toast = this.toastCtrl.create({
        message: "Please Select One Issue",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      return;
    }
    if(this.description == null || this.description == ""){
      let toast = this.toastCtrl.create({
        message: "Please specify the Description",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      return;
    }
    let data = this.utils.serviceShareData(Service.ELECTRICAL.toString(), this.selectedList, this.description);
    console.log(data);
    this.navCtrl.push(AddressPage, data);
  }



}
