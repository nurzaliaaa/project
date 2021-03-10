import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage {

  params_addition: Object;
  params_sub: Object;
  params_multiple: Object;
  params_div: Object;

  constructor(public navCtrl: NavController) { 

    this.params_addition = { id: 1 };
    this.params_sub = { id: 2 };
    this.params_multiple = { id: 3 };
    this.params_div = { id: 4 };
    
  }


}
