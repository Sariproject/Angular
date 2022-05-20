import { HttpClient } from '@angular/common/http';
import { IpConfig, SettingsConfig } from 'type';
export declare class ConfigurationService {
    private http;
    ips: IpConfig;
    settingConfig: SettingsConfig;
    constructor(http: HttpClient);
    initConfiguration(path: any): Promise<any>;
}
