import { Observable } from 'rxjs';
import { AdviceForStudent, TalentsModel } from 'type';
import { HttpServiceBase } from './http-service.base';
export declare class TeachersService extends HttpServiceBase {
    teacherDetails: any;
    students: any[];
    private readonly _serverUrl;
    getTeacherDetails$(id: any): Observable<any>;
    getStudentsById$(id: any): Observable<any[]>;
    getTalents$(): Observable<TalentsModel[]>;
    getOneTalentForClass$(classes: any, talentId: any): Observable<AdviceForStudent[]>;
    addTalentForStudent$(firstName: any, LastName: any, talentId: any): Observable<any>;
    updateMoreDetails$(firstName: any, LastName: any, talent: any, details: any): Observable<any>;
    deleteTalentForStudent$(firstName: any, LastName: any, talentId: any): Observable<any>;
    addAdviceForStudent$(firstName: any, LastName: any, talentId: any, count: any): Observable<any>;
    updateAdviceForStudent$(firstName: any, LastName: any, talentId: any, count: any): Observable<any>;
    deleteAdviceForStudent$(firstName: any, LastName: any, talentId: any): Observable<any>;
    addNewTalent$(nameTalent: any): Observable<any>;
    readonly CurrentTeacher: any;
    readonly CurrentStudents: any[];
}
