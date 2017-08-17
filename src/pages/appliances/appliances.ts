import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { AddressPage } from "../address/address";
import { AppliancesEnum,Service } from "../../common/enums";
import { Utils } from "../../providers/utils";
/*
  Generated class for the Appliances page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-appliances',
  templateUrl: 'appliances.html'
})
export class AppliancesPage {
	appliancesServiceList:Array<{name:string,component:Array<AppliancesEnum>,
								selectedList:Array<string>}>;
	selectedList: Array<string>;
  description:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController, public utils:Utils) {
  	this.appliancesServiceList = [];
  	this.appliancesServiceList.push(
  			{
  				name: "AC",
  				component:  [	
			                    AppliancesEnum.AC_SERVICE, 
								AppliancesEnum.AC_GAS_FILL,
								AppliancesEnum.AC_INSTALLATION,
								AppliancesEnum.AC_OTHER_REPAIR
  							],
  				selectedList:[]
  			},
  			{
  				name: "Refrigerator",
  				component:  [	
			                    AppliancesEnum.REFRIGERATOR_SERVICE, 
								AppliancesEnum.REFRIGERATOR_REPAIR,
  							],
  				selectedList:[]
  			},
  			{
  				name: "Washing machine",
  				component:  [	
			                    AppliancesEnum.WASHING_MACHINE_SERVICE, 
								AppliancesEnum.WASHING_MACHINE_REPAIR,
  							],
  				selectedList:[]
  			},
  			{
  				name: "Other appliances",
  				component:  [	
			                    AppliancesEnum.MICROWAVE_OVEN_REPAIR, 
								AppliancesEnum.WATER_PURIFIER_SERVICE,
								AppliancesEnum.TV_REPAIR,
								AppliancesEnum.GEYSER_SERVICE,
								AppliancesEnum.OTHERS
  							],
  				selectedList:[]
  			},

  		)
  }

  ionViewDidLoad() {
    this.selectedList = [];
  }


  updateSelectedList(){
  	this.selectedList = [];
  	for(let service of this.appliancesServiceList){
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
    let data = this.utils.serviceShareData(Service.APPLIANCES.toString(), this.selectedList, this.description);
    console.log(data);
    this.navCtrl.push(AddressPage, data);
  }

}
