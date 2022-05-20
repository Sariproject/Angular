import { HttpHeaders } from '@angular/common/http';
export declare class HttpRequestModel {
    component: string;
    logMessage: string;
    url: string;
    action: string;
    params: object;
    body: any;
    isText: boolean;
    headers: HttpHeaders;
    constructor(copy?: Partial<HttpRequestModel>);
    readonly queryParams: string;
    private _queryParams;
    readonly fullUrl: string;
    readonly fullParams: object;
}
