import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { PlumbingEnum, Service } from "../../common/enums";
import { AddressPage } from "../address/address";
import { Utils } from "../../providers/utils";
/*
  Generated class for the Plumbing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-plumbing',
  templateUrl: 'plumbing.html'
})
export class PlumbingPage {
	plumbingServiceList:Array<{name:string,component:Array<PlumbingEnum>,
								selectedList:Array<string>}>;
  description:string;
	selectedList: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   private toastCtrl: ToastController, public utils:Utils) {
  	this.plumbingServiceList = [];
  	this.plumbingServiceList.push(
  						{
  							name: "Taps, Wash Basin and Sink",
  							component:  [	
                        PlumbingEnum.TAP, 
  											PlumbingEnum.WASH_BASIN,
  											PlumbingEnum.KITCHEN_SINK
  										],
  							selectedList:[]

  						},
  						{
  							name: "Toilet and Sanitary Work",
  							component:  [	PlumbingEnum.WESTERN_TOILET, 
  											PlumbingEnum.FLUSH_TANK,
  											PlumbingEnum.INDIAN_TOILET,
  											PlumbingEnum.TOILET_JET
  										],
  							selectedList:[]

  						},
  						{
  							name: "Bathroom Fittings",
  							component:  [	PlumbingEnum.SHOWER, 
  											PlumbingEnum.PIPELINE,
  											PlumbingEnum.PUMPS,
  										],
  							selectedList:[],

  						}

  	);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumbingPage');
    this.selectedList = [];
  }

  updateSelectedList(){
  	this.selectedList = [];
  	for(let service of this.plumbingServiceList){
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
    let data = this.utils.serviceShareData(Service.PLUMBING.toString(), this.selectedList, this.description);
    console.log(data);
    this.navCtrl.push(AddressPage, data);
  }

}
