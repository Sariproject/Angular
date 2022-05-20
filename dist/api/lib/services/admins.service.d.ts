import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityModel, newStudentModel, StudentModel, TalentsModel } from 'type';
import { HttpServiceBase } from './http-service.base';
export declare class AdminsService extends HttpServiceBase {
    options: {
        headers: HttpHeaders;
    };
    url: string;
    private readonly _serverUrl;
    getActivity$(): Observable<ActivityModel[]>;
    getTalents$(): Observable<TalentsModel[]>;
    getYears$(): Observable<TalentsModel[]>;
    getStudentsByClass$(classes: any): Observable<StudentModel[]>;
    insertStudents$(newStudent: newStudentModel): Observable<StudentModel[]>;
    Search$(): Observable<any[][]>;
    getStudentsForFilter(letter: string): Observable<any[]>;
    insertTaskForStudent(form: any): Observable<any[]>;
    addNewTalent$(nameTalent: any): Observable<object>;
    addNewActivity$(nameActivity: any): Observable<object>;
    getDate$(): Observable<any>;
    insertDate(Date: any): Observable<any>;
    updateClass$(): Observable<any>;
    postFile$(fileToUpload: any): Observable<any>;
}
