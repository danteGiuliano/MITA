import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private qr_scan: BarcodeScanner) {}


  scan(){
    this.qr_scan.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
