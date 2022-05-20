import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { HttpRequestModel, IpConfig, SettingsConfig } from 'type';

@Injectable({
  providedIn: 'root'
})
export class SService {
  

  constructor(private http: HttpClient) { }
  private get _serverUrl(): string {
    return `http://localhost:7900/admin/files`;
  }
   
  postFile$(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.set('myFile', fileToUpload, fileToUpload.name);
    const myHeaders = {
      headers: { Accept: 'application/json' },
    };
    console.log(formData);
    return this.http.post<string>(this._serverUrl,formData,myHeaders)
  }

  
}
