import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'type';
import { HttpServiceBase } from './http-service.base';

@Injectable({
  providedIn: 'root'
})
export class GeneralFunctionService extends HttpServiceBase {
  url = "http://localhost:7900/admin";
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}admin/`;
  }
  addNewTalent$(nameTalent) {

    return this.get$<any>(new HttpRequestModel({
      url: this._serverUrl,
      action: 'insertTalent',
      params: { nameTalent }
    }))
  }
}
