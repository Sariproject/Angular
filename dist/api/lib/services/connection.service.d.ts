import { Observable } from 'rxjs';
import { UserModel } from 'type';
import { HttpServiceBase } from './http-service.base';
export declare class ConnectionService extends HttpServiceBase {
    private readonly _serverUrl;
    getTypeUser$(id: string): Observable<UserModel[]>;
}
