import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'api';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


  Date = `תשפ"ב`
  constructor(private Admin: AdminsService) { }

  ngOnInit() {


    this.Admin.getDate$().subscribe(
      ans => {
        this.Date = `${ans.date} ${ans.month_name} 
      ${ans.year} `,
        console.log(ans);
        // this.Admin.insertDate(ans.year).subscribe(
        //   ans=>console.log(ans))
      })
    console.log(new Date().toLocaleDateString())
    setInterval(_ => {
      console.log(new Date().getDate()),
        this.Admin.getDate$().subscribe(
          ans => {
            if (`${ans.month_name}  ${ans.year}` != this.Date){
            this.Date = `${ans.month_name} ${ans.year}`,
                console.log(ans);
                // this.Admin.insertDate(ans.year).subscribe(
                //   ans=>console.log(ans)
                  
                // )
            } 
          }
        )
    }, 1000*60*60*24);



  }

}
