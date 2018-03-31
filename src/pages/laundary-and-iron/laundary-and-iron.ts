import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { Utils } from "../../providers/utils";
import { LaundaryEnum,Service } from "../../common/enums";
import { AddressPage } from "../address/address";

/*
  Generated class for the LaundaryAndIron page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-laundary-and-iron',
  templateUrl: 'laundary-and-iron.html'
})
export class LaundaryAndIronPage {
	laundaryList:Array<{name:string,component:Array<LaundaryEnum>,
								selectedList:Array<string>}>;
	selectedList: Array<string>;
	description:string;
	currentNumber: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  		private toastCtrl: ToastController, public utils:Utils) {
  		this.currentNumber = "2";
  		this.laundaryList = [];
  		this.laundaryList.push(
	  		{
	  			name: "Mens Wear",
	  			component: [
	  				LaundaryEnum.FULL_SHIRT,
	  				LaundaryEnum.HALF_SHIRT,
	  				LaundaryEnum.TROUSERS,
	  				LaundaryEnum.JEANS,
	  				LaundaryEnum.KURTA,
	  				LaundaryEnum.PAIJAMA,
	  				LaundaryEnum.SHORTS,
	  				LaundaryEnum.TRACKSUIT,
	  				LaundaryEnum.MUFFLER
	  			],
	  			selectedList: []
	  		},
	  		{
	  			name: "Festival Ocassional Wear",
	  			component: [
	  				LaundaryEnum.SUITS,
	  				LaundaryEnum.SHERWANI,
	  				LaundaryEnum.COAT_BLAZER,
	  				LaundaryEnum.WAIST_COAT,
	  				LaundaryEnum.DHOTI
	  			],
	  			selectedList: []
	  		},
	  		{
	  			name: "Winter Wear",
	  			component: [
	  				LaundaryEnum.SWEATER,
	  				LaundaryEnum.SWEATSHIRT,
	  				LaundaryEnum.JACKET_NORMAL,
	  				LaundaryEnum.JACKET_WOOLEN,
	  				LaundaryEnum.JACKET_LEATHER,
	  				LaundaryEnum.OVERCOAT
	  			],
	  			selectedList: []
	  		},
	  		{
	  			name: "Women's Wear",
	  			component: [
	  				LaundaryEnum.DUPATTA,
	  				LaundaryEnum.SALWAR_TROUSER,
	  				LaundaryEnum.LADIES_KURTA,
	  				LaundaryEnum.SKIRT,
	  				LaundaryEnum.SAREE_COTTON,
	  				LaundaryEnum.BLOUSE,
	  				LaundaryEnum.WESTERN_TOP,
	  				LaundaryEnum.PETTICOAT,
	  				LaundaryEnum.SAREE_SILK,
	  				LaundaryEnum.LEHENGA,
	  				LaundaryEnum.WOMEN_GOWN,
	  				LaundaryEnum.SHAWL

	  			],
	  			selectedList: []
	  		},
	  		{
	  			name: "Home Lenin",
	  			component: [
	  				LaundaryEnum.BEDSHEET_SINGLE,
	  				LaundaryEnum.BEDHSEET_DOUBLE,
	  				LaundaryEnum.BLANKET,
	  				LaundaryEnum.TABLE_CLOTH,
	  				LaundaryEnum.CURTAINS,

	  			],
	  			selectedList: []
	  		}
  	);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaundaryAndIronPage');
    this.selectedList = [];
  }

  updateSelectedList() {
  		this.selectedList = [];
  	for(let service of this.laundaryList){
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
    let data = this.utils.serviceShareData(Service.LAUNDARY_IRON.toString(), this.selectedList, this.description);
    console.log(data);
    this.navCtrl.push(AddressPage, data);
  }

}
