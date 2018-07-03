import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage'
import { FirebaseService } from '../../services/firebase.service';
import { SmartContractService } from '../../services/smart-contract.service'
import { User } from '../../models/user'

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { finalize } from 'rxjs/operators';

declare var M: any;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: []
})
export class FileUploadComponent implements OnInit {
  totalStes: number = 3;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<any>;

  uploadState: Observable<string>;
  fileNameId: string

  userToDealWithEmail: string;
  userTodealWith: User[];
  userToDealStep3: User;
  currentUserAccountAddress: any = "Not reachable";
  currentUserInfo: User[];

  constructor(private afStorage: AngularFireStorage, private fireService: FirebaseService, private contractServices : SmartContractService) { }

  ngOnInit() {
  }

  upload(event) {

    const id: string = new Date().getTime().toString();
    this.fileNameId = `assets/${id}_${event.target.files[0].name}`
    this.ref = this.afStorage.ref(this.fileNameId);
    this.task = this.ref.put(event.target.files[0])

    //Para el porcentaje del progreso del upload
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.showAgreementSection();
      })).subscribe()
    ///UploadState
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
  }
  //////This functions hides the loading sectionand shows the section where two people agree in a deal
  showAgreementSection() {
    let sectionOne = document.getElementById('setDealStepOne')
    sectionOne.classList.add('hide')

    let sectionTow = document.getElementById("setDealStepTwo");
    sectionTow.classList.remove('hide')
  }


  findUserByAddress() {

    ///******************************/
    ///Firebase
    if (this.userToDealWithEmail) {
      this.fireService.getSpecificUser(this.userToDealWithEmail).subscribe(data => {
        this.userTodealWith = data;
      });
      document.getElementById('serchUserByIdForm').classList.add('scale-out');
      document.getElementById('serchUserByIdForm').classList.add('hide');
    } else {
      M.toast({ html: 'The field is empty!' })
    }
  }

  resetForm() {
    let serchUserByIdForm = document.getElementById("serchUserByIdForm") as HTMLFormElement;
    serchUserByIdForm.reset();
    this.userToDealWithEmail = "";
    this.userTodealWith = null;
    document.getElementById('serchUserByIdForm').classList.remove('hide');

  }

  selectUserToDealWith(userToDealStep3: User) {
    document.getElementById('setDealStepTwo').classList.add('hide')
    document.getElementById('setDealStepThree').classList.remove('hide')


    ///get The current user Data
    ///******************************/
    ///Firebase
    this.contractServices.getUserAccount()
      .then(account => {
        this.currentUserAccountAddress = account;
        ///******************************/
        ///Firebase
        this.fireService.getUserAddress(account)
        this.fireService.getUserInfo().subscribe(queriedItems => {
          this.currentUserInfo = queriedItems;
          //console.log(this.userInfo)
        });
      });


    this.userToDealStep3 = userToDealStep3
    console.log(userToDealStep3)
  }
}
