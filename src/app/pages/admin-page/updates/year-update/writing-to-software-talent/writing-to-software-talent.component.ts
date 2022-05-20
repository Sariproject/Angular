import { Component, OnInit } from '@angular/core';
import * as XLSX from 'XLSX';
//import { SService } from 'projects/api/src/lib/services/servise';
import { AdminsService } from 'api';
import { setInterval } from 'timers';

@Component({
  selector: 'app-writing-to-software-talent',
  templateUrl: './writing-to-software-talent.component.html',
  styleUrls: ['./writing-to-software-talent.component.scss']
})
export class WritingToSoftwareTalentComponent implements OnInit {


  fileToUpload: File = null;
  file: File;
  arrayBuffer: any;
  fileList: any;
  listKeys: string[];
  updateSql: any;
  constructor(private adminService:AdminsService) { }

  ngOnInit() {
    
  }
  SendFiles(files: FileList){
      // console.log(files);
      
      // this.fileToUpload = files[0];
      // this.s.postFile$(this.fileToUpload).subscribe(
      //   (data) => {
      //     console.log(data);
          
      //   },
      //   (error) => {
      //     console.log(error);
          
      //   }
      // );
      
     
      
      document.getElementById("loader").style.display = "block";
      setTimeout( _=>{
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }, 3000);
      this.file=files[0]
      const fileReader=new FileReader()
      fileReader.readAsArrayBuffer(this.file)
      fileReader.onload=()=>{
        this.arrayBuffer=fileReader.result
        const data=new Uint8Array(this.arrayBuffer)
        const arr=new Array()
        for(let i=0;i<data.length;i++){
          arr[i]=String.fromCharCode(data[i])
        }
        const bstr=arr.join('')
        const workbook=XLSX.read(bstr,{type:'binary',cellDates:true})
        const firstSheetName=workbook.SheetNames[0]
        const worksheet=workbook.Sheets[firstSheetName]
        this.fileList=XLSX.utils.sheet_to_json(worksheet,{ raw: true })
        this.listKeys=Object.keys(this.fileList[0])
        console.log(this.fileList);
        this.adminService.postFile$(this.fileList).subscribe(
          ans=>{console.log(ans)
          this.updateSql=ans})
      }
     
    }
}
