import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DataService } from '../providers/data-service';
import { Service } from '../providers/service';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { MenuPage } from '../pages/menu/menu';
import { PlumbingPage } from '../pages/plumbing/plumbing';
import { AddressPage } from '../pages/address/address';
import { ElectricalPage } from '../pages/electrical/electrical';
import { CarpentryPage } from '../pages/carpentry/carpentry';
import { AppliancesPage } from '../pages/appliances/appliances';
import { CarsandbikesPage } from '../pages/carsandbikes/carsandbikes';
import { BeautyPage } from '../pages/beauty/beauty';
import { BusinessPage } from '../pages/business/business'; 
import { PersonalPage } from '../pages/personal/personal';
import { OtherPage } from '../pages/other/other';
import { ContactusPage } from '../pages/contactus/contactus';
import { MyordersPage } from '../pages/myorders/myorders';
import { NumberVerificationPage } from '../pages/number-verification/number-verification';
import { SignupPage } from '../pages/signup/signup';
import { FinishPage } from '../pages/finish/finish';


import { Utils } from '../providers/utils';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    MenuPage,
    PlumbingPage,
    AddressPage,
    ElectricalPage,
    CarpentryPage,
    AppliancesPage,
    CarsandbikesPage,
    BeautyPage,
    BusinessPage,
    PersonalPage,
    OtherPage,
    ContactusPage,
    MyordersPage,
    NumberVerificationPage,
    SignupPage,
    FinishPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    MenuPage,
    PlumbingPage,
    AddressPage,
    ElectricalPage,
    CarpentryPage,
    AppliancesPage,
    CarsandbikesPage,
    BeautyPage,
    BusinessPage,
    PersonalPage,
    OtherPage,
    ContactusPage,
    MyordersPage,
    NumberVerificationPage,
    SignupPage,
    FinishPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
   Utils, 
   Service,
   Storage,
   DataService
  ]
})
export class AppModule {}
