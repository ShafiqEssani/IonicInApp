import { Component } from '@angular/core';

import { Platform, } from 'ionic-angular';

import { InAppBrowser } from 'ionic-native';

@Component({
selector: 'page-home',
templateUrl: 'home.html'
})

export class HomePage {

    constructor( public platform: Platform, ) {
      platform.ready().then(() => {
          new InAppBrowser("https://www.logojeeves.com",'_self',"location=no,zoom=no");
    });



  }
}
