import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'api';
import { SService } from 'projects/api/src/lib/services/servise';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-year-update',
  templateUrl: './year-update.component.html',
  styleUrls: ['./year-update.component.scss']
})
export class YearUpdateComponent implements OnInit {
  fileToUpload: File = null;
  flagviewEXCEL=false
  flagviewSofter=false
  header='בחר כיתה'
  constructor(private adminService: AdminsService,private s:SService) { }

  ngOnInit() {
  }
  Start(ev){
   if(ev=="Read"){
      console.log(ev);
      this.flagviewSofter=false
   }
   else{
     console.log(ev);
     this.flagviewSofter=true
   }
   
         
  }
  UpdateClass(){
    this.adminService.updateClass$().subscribe(
      ans=>console.log(ans)
      
    )
  }
  

  
  
}
