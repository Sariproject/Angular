
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends HttpServiceBase {


  private studentDetails: any
  url = "http://localhost:7900/student";


  private get _serverUrl(): string {
    
    return `${this.config.ips.servicePath}student/`;
  }
 
  getStudentDetails$(id): Observable<any> {
    
    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getStudentDetails',
      params: {id}
    }))

  }

  getStudentTasks$(id): Observable<any> {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getStudentTasks',
      params: {id}
    }))
  }

  getStudentTalent$(id): Observable<any> {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getStudentTalents',
      params: {id}
    }))
  }
  getStudentbyStudentId$(StudentId): Observable<any[][]> {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getStudentbyStudentId',
      params: {StudentId}
    }))
  }
  getYears$(StudentId): Observable<any[][]> {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getYears',
      params: {StudentId}
    }))
  }
  deleteTasks$(TasksId): Observable<any[][]> {

    return this.delete$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'deleteTasks',
      params: {TasksId}
    }))
  }
  UpdateTasks$(UpdateTasks){
    return this.post$<object>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'UpdateTasks',
      body: UpdateTasks
    }))
  }
  get CurrentStudent() {
    console.log(this.config);
    return this.studentDetails;
  }
}
