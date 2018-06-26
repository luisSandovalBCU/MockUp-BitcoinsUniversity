import { Component, OnInit } from '@angular/core';
import { SmartContractService } from '../../services/smart-contract.service'

declare var M:any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  public videoPrice : number;
  public VideoPriceToSell : any = 15.00;
  public showPrice : boolean = true;

  constructor(public smartContract: SmartContractService) { }

  ngOnInit() {
    // this.VideoPriceToSell = this.smartContract.Num;
    // console.log(this.smartContract.Num);
    let collapsibleOptions = new Object();
    var collapsibleElems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(collapsibleElems, collapsibleOptions);

    let modalOptions = new Object();
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, modalOptions);
  }

  removePrice(){
    this.showPrice = false;
  }


}
