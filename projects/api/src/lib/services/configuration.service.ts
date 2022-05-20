import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { IpConfig, SettingsConfig } from 'type';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  ips: IpConfig;
  settingConfig: SettingsConfig;

  constructor(private http: HttpClient) { }

  initConfiguration(path): Promise<any> {
    
    return combineLatest(
      this.http.get<IpConfig>(`${path}/ipConfig.json`),
      this.http.get<SettingsConfig>(`${path}/settingsConfig.json`)
    ).pipe(
      tap(response => [this.ips, this.settingConfig] = response),
      tap(response => console.log(this.ips,"lll")),
      
    ).toPromise();
  }
}
