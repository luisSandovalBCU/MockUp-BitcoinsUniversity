import { Component, OnInit } from '@angular/core';
import { SmartContractService } from '../../services/smart-contract.service'
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage} from 'angularfire2/storage'


declare var M:any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  public videoPrice : number;
  assetSource: Observable<string>;
  public showPrice : boolean = true;

  constructor(public smartContract: SmartContractService, private afStorage: AngularFireStorage) {
    let fileNameId = this.afStorage.ref('userProfilePics/1530512787860_BC-Video.mp4');
    fileNameId.getDownloadURL().subscribe(url => {
      this.assetSource = url
      // console.log(url)
    })
   }

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
