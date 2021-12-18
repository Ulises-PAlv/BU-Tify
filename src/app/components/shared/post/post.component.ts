import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JSONPlaceholderApiService } from 'src/app/services/Test/jsonplaceholder-api.service';
import { APIBUtifyService } from 'src/app/services/API-BUtify/api-butify.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  comments: any = [];
  commentsBand: boolean = false;
  users: any = [];

  pubId2Comm: any;
  bandShowModalComm: boolean = false;
  usrID: any;

  error: boolean = false;
  errorMsj: string = '';
  nameAlert: string = '';

  @Input() PadrePost: any = {};
  @Output() selectedPost: EventEmitter<number>;


  constructor(private _router: Router, private butifyService: APIBUtifyService, private cdr: ChangeDetectorRef) {
    this.selectedPost = new EventEmitter();
    this.usrID = localStorage.getItem('idUsr') || null;

    this.butifyService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    }, (errorService) => {
      this.error = true;
      this.errorMsj = errorService.error.error.message;
    });
  }

  // ?? Methods ###############################################################################################
  seeComments(id: any) {
    if(this.commentsBand === false) {
      this.commentsBand = true;

      this.butifyService.getComments(id).subscribe((data: any) => {
        this.comments = data;
        console.log(this.comments);
      }, (errorService) => {
        this.error = true;
        this.errorMsj = errorService.error.error.message;
      });
    } else {
      this.commentsBand = false;
    }
  }

  goToUsr(name: string) {
    let id: number = 1

    this.users.forEach((usr: any) => {
      if(usr.UsrName === name) {
        id = usr.UsrID;
      }
    });

    this._router.navigate(['/user', id]);
  }

  showCommentModal(id: string) {
    this.pubId2Comm = id;
    this.bandShowModalComm = !this.bandShowModalComm;
  }

  async addComment(text: any) {
    let bodyComment = {
      'BelongPubID': this.pubId2Comm,
      'CommentText': text,
      'IdUser': Number(this.usrID)
    }
    
    console.log(bodyComment)
    this.bandShowModalComm = false;

    this.butifyService.postComment(bodyComment)
    this.cdr.markForCheck()
  }

  // ?? Life cycle ############################################################################################
  ngOnInit(): void { }
}
