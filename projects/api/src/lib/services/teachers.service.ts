
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdviceForStudent, HttpRequestModel, TalentsModel } from 'type';
import { HttpServiceBase } from './http-service.base';


@Injectable({
  providedIn: 'root'
})
export class TeachersService extends HttpServiceBase {

  teacherDetails: any
  students = []


  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}teacher/`;
  }

  getTeacherDetails$(id): Observable<any> {
    
    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'teacherDetails',
      params: { id }
    }))
  }

  getStudentsById$(id): Observable<any[]> {

    return this.get$<any[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'students',
      params: { id }
    }))
  }

  getTalents$(): Observable<TalentsModel[]> {

    return this.get$<TalentsModel[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'talent',
    }))
  }

  getOneTalentForClass$(classes, talentId): Observable<AdviceForStudent[]> {

    return this.get$<AdviceForStudent[]>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'talents',
      params: { classes, talentId }
    }))
  }

  addTalentForStudent$(firstName, LastName, talentId): Observable<any> {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'addTalent',
      params: { firstName, LastName, talentId }
    }))
  }

  updateMoreDetails$(firstName, LastName, talent, details) {

    if (details == '') { details = 'null' }
    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'updateMoreDetails',
      params: { firstName, LastName, talent, details }
    }))
  }

  deleteTalentForStudent$(firstName, LastName, talentId): Observable<any> {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'deleteTalent',
      params: { firstName, LastName, talentId }
    }))
  }

  addAdviceForStudent$(firstName, LastName, talentId, count) {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'addAdvice',
      params: { firstName, LastName, talentId, count }
    }))
  }

  updateAdviceForStudent$(firstName, LastName, talentId, count) {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'updateAdvice',
      params: { firstName, LastName, talentId, count }
    }))
  }

  deleteAdviceForStudent$(firstName, LastName, talentId) {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'deleteAdvice',
      params: { firstName, LastName, talentId }
    }))
  }
  addNewTalent$(nameTalent) {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'insertTalent',
      params: { nameTalent }
    }))
  }

  get CurrentTeacher() {
    return this.teacherDetails;
  }
  get CurrentStudents() {
    return this.students;
  }
}
