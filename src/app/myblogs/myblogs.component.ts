import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user:any = {};
  url: string;
  surl : SafeUrl;


  constructor(private sanitizer: DomSanitizer) {
  
    this.user = firebase.auth().currentUser;
    this.url=this.user.photoURL;
    this.surl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    console.log(this.user.displayName)
    
      }

    ngOnInit() {

    }

}