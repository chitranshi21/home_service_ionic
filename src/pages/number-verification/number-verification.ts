import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { PHONE_KEY } from "../../common/enums";
import { SignupPage } from "../signup/signup";


/*
  Generated class for the NumberVerification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-number-verification',
  templateUrl: 'number-verification.html'
})
export class NumberVerificationPage {
	phone_number: string;
  showOTPFields: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private dataService: DataService,public toastCtrl: ToastController) {
  		this.getPhoneNumber();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumberVerificationPage');
  }

  getPhoneNumber(){
  	var phoneNumberService = this.dataService.getPhoneNumber();
  	phoneNumberService.ready().then(() => {
  		phoneNumberService.get(PHONE_KEY).then((val)=>{
  			if(val != null){
  				this.phone_number = val;
  			}
  		});
  	});
  }

  setPhoneNumber(){
  	let phoneNumberService = this.dataService.setPhoneNumber();
  	phoneNumberService.ready().then(()=>{
  		phoneNumberService.set(PHONE_KEY, this.phone_number);
  	});
  }

  showOTP(){
    this.showOTPFields = true;
  }

  onClickGenerateOTP(){
    // resend the request to generate otp
  }

  onClickOTPConfirm(){
    // either land on the signup page or 
    // land on the confirm order page
    this.navCtrl.push(SignupPage);

  }

  onClickNext(){
  	if(!this.phone_number){
  		let toast = this.toastCtrl.create({
        message: "Please enter your phone number",
        duration: 3000,
        position: 'bottom'
      	});
      toast.present();
      return;
  	}
  	else if(this.phone_number.length != 10){
  		let toast = this.toastCtrl.create({
        message: "Please check the number you entered",
        duration: 3000,
        position: 'bottom'
      	});
      toast.present();
      return;

  	}
  	this.setPhoneNumber();
    this.showOTP();
  }

}
