import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  closeModal: string;
  
  constructor(private modalService: NgbModal) {}
  ngOnInit(){
    
  }
  
    /// פתיחת המודל
  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
/// modal.close() מגיע לכאן כשלוחצים 
//כאן אפשר לדעת אם לחץ על 'סגור' לדוג' או על 'אישור' לדוג'
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
/// modal.dismiss() מגיע לכאן כשלוחצים 
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
//הסיבה לא חשובה בעקרון אלא אם כן חשוב לך לדעת אם לחץ על סגור למעלה או מסביב למודל// 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
}

//אפשר להכניס בפונ' של פתיחת המודל מאפיינים לעיצוב

//לדוג':
 

