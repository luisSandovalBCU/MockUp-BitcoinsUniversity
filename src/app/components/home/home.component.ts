import { Component, OnInit } from '@angular/core';
import { SmartContractService } from '../../services/smart-contract.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  searching : boolean = false;
  constructor( public contractOne : SmartContractService) { }

  ngOnInit() {
    this.contractOne.printRandomInfo();
  }

}
