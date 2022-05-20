import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
export declare class StudentsService extends HttpServiceBase {
    private studentDetails;
    url: string;
    private readonly _serverUrl;
    getStudentDetails$(id: any): Observable<any>;
    getStudentTasks$(id: any): Observable<any>;
    getStudentTalent$(id: any): Observable<any>;
    getStudentbyStudentId$(StudentId: any): Observable<any[][]>;
    getYears$(StudentId: any): Observable<any[][]>;
    deleteTasks$(TasksId: any): Observable<any[][]>;
    UpdateTasks$(UpdateTasks: any): Observable<object>;
    readonly CurrentStudent: any;
}
