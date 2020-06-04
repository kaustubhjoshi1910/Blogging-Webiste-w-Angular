import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { error } from 'protractor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  editorConfig: any;
  title: string;
  content: string;
  checkTitle : boolean = false;

  @Output('postCreated') postCreated = new EventEmitter;


  constructor() {
    this.editorConfig = {
      "editable": true,
      "spellcheck": true,
      "height": "auto",
      "minHeight": "150px",
      "width": "auto",
      "minWidth": "0",
      "translate": "yes",
      "enableToolbar": true,
      "showToolbar": false,
      "placeholder": "Enter text here...",
      "imageEndPoint": "",
      "toolbar": [
        ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        ["link", "unlink"/*, "image"*/],
        ["code"]
      ]
    }
  }

  ngOnInit() {
  }
 
  createPost() {

    firebase.firestore().settings({
      timestampsInSnapshots:true
    });

    if(this.title == undefined || this.title.length == 0)
      {
        this.checkTitle = true;
        console.log(this.checkTitle);
        return;
        
      }

      else {
        this.checkTitle=false;
        console.log(this.checkTitle);
      }
    
    firebase.firestore().collection("posts").add({
      title : this.title,
      content : this.content,
      owner : firebase.auth().currentUser.uid,
      created : firebase.firestore.FieldValue.serverTimestamp()
    }).then((data)=>
    {
      console.log(data);
      this.postCreated.emit();
    }).catch((error)=>
    console.log(error))
  }



}