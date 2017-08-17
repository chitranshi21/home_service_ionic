import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';

import { PlumbingPage } from '../plumbing/plumbing';
import { ElectricalPage } from '../electrical/electrical';
import { CarpentryPage } from '../carpentry/carpentry'; 
import { AppliancesPage } from '../appliances/appliances';
import { CarsandbikesPage } from '../carsandbikes/carsandbikes';
import { BeautyPage } from '../beauty/beauty';
import { BusinessPage } from '../business/business';
import { PersonalPage } from '../personal/personal';
import { OtherPage } from '../other/other';
/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
	menuList: Array<{name:string, image:string, page:Component}>;
	bannerList: Array<{name:string, image:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  			 public toastCtrl: ToastController) {
  	this.menuList = [];
  	this.menuList.push({
  							name : "plumbing",
  							image : "images/plumber_icon.png",
  							page : PlumbingPage
              },
  						{
  							name:"Electrical",
  							image:"images/electrician_icon.png",
  							page:ElectricalPage
  						},
  						{
  							name:"Carpantry",
  							image:"images/carpanter.png",
  							page:CarpentryPage
  						},
  						{
  							name:"Appliances",
  							image:"images/appliance_icon.png",
  							page:AppliancesPage
  						},
  						{
  							name:"Cars and Bikes",
  							image:"images/car_repair_icon.png",
  							page:CarsandbikesPage
  						},
  						{
  							name:"Beauty",
  							image:"images/beauty_icon.png",
  							page:BeautyPage
  						},
  						{
  							name:"Business Service",
  							image:"images/business_icon.svg",
  							page:BusinessPage
  						},
  						{
  							name:"Personal Service",
  							image:"images/other_icon.png",
  							page:PersonalPage
  						},
  						{
  							name:"Others",
  							image:"images/other_icon.png",
  							page:OtherPage
  						},
  						);

  }

  ionViewWillEnter(){
  	this.bannerList = [];
  	this.bannerList.push(
  							{
  								name: "test banner 1",
  								image: "images/electrician_banner.jpg",
  							},
  							{
  								name: "test banner 1",
  								image: "images/plumber_banner.jpg",
  							}
  		)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  menuTap(event){
  	// let toast = this.toastCtrl.create(
  	// 			{
  	// 				message: "you clicked our service",
  	// 				duration : 3000
  	// 			}
  	// 	);
  	// toast.present();
  }
  onClickCard($event, menu){
    this.navCtrl.push(menu.page);
  }
}
