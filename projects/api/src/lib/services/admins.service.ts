import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel, HttpRequestModel, newStudentModel, StudentModel, TalentsModel } from 'type';
import { HttpServiceBase } from './http-service.base';

@Injectable({
  providedIn: 'root'
})
export class AdminsService extends HttpServiceBase {

  options = { headers: new HttpHeaders({ Accept: 'application/json' }) };

  url = "http://localhost:7900/admin";
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}admin/`;
  }
   
  getActivity$(): Observable<ActivityModel[]> {
    console.log("0000000000000000");
    
    return this.get$<ActivityModel[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'activityList',
    }))
  }
  getTalents$(): Observable<TalentsModel[]> {

    return this.get$<TalentsModel[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'talent',
    }))
  }
  getYears$(): Observable<TalentsModel[]> {

    return this.get$<TalentsModel[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'year',
    }))
  }
  
  getStudentsByClass$(classes): Observable<StudentModel[]> {

    return this.get$<StudentModel[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getStudentsByClass',
      params: { classes }
    }))
  }
  insertStudents$(newStudent:newStudentModel): Observable<StudentModel[]> {

    return this.get$<StudentModel[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'insertStudents',
      params: newStudent
    }))
  }

  Search$(): Observable<any[][]> {

    return this.post$<any[][]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'Search',
    }))
  }
  getStudentsForFilter(letter:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/studentsList/${letter}`)
  }
  
  insertTaskForStudent(form):Observable<any[]>{

    return this.get$<any[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'insertTaskForStudent',
      params: form
    }))
  }
  addNewTalent$(nameTalent) {
    console.log(nameTalent);
    
    return this.get$<object>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'insertTalent',
      params: nameTalent
    }))
  }
  addNewActivity$(nameActivity) {

    return this.get$<object>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'insertActivity',
      params: nameActivity
    }))
  }
  
  getDate$(){

    return this.post$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getDate'
    }))
  }
  insertDate(Date){
    return this.post$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'insertDate',
      body:{Date}
    }))
  }
  updateClass$(){

    return this.post$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'updateClass'
    }))
  }
  postFile$(file): Observable<any> {
    return this.post$<string>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'files',
      body: file,
      
    }))

  }
  

}
