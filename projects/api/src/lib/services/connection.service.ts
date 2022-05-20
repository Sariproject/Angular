import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestModel, UserModel } from 'type';
import { HttpServiceBase } from './http-service.base';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService extends HttpServiceBase {

  private get _serverUrl(): string {
    console.log(this.config);
    return `${this.config.ips.servicePath}`;
  }

  
  getTypeUser$(id: string): Observable<UserModel[]> {
    
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: id
      
    }));
  }
}
