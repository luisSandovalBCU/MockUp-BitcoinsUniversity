import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: []
})
export class FileUploadComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<any>;
  profileUrl: Observable<string>;
  fileNameId: string 


  constructor(private afStorage: AngularFireStorage) { 
    let fileNameId = this.afStorage.ref('userProfilePics/1530512787860_BC-Video.mp4');
    fileNameId.getDownloadURL().subscribe(url => {
      this.profileUrl = url
      // console.log(url)
    })
  }

  ngOnInit() {
  }

  upload(event){
    
    const id : string = new Date().getTime().toString();
    this.fileNameId = `userProfilePics/${id}_${event.target.files[0].name}`
    this.ref = this.afStorage.ref(this.fileNameId);
    this.task = this.ref.put(event.target.files[0])

    //Para el porcentaje del progreso del upload
    this.uploadProgress = this.task.percentageChanges();
  }

}
