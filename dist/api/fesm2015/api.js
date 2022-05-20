import { Injectable, ɵɵdefineInjectable, Component, NgModule, ɵɵinject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { HttpRequestModel } from 'type';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiService {
    constructor() { }
}
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [];
/** @nocollapse */ ApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(); }, token: ApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ApiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-api',
                template: `
    <p>
      api works!
    </p>
  `
            }] }
];
/** @nocollapse */
ApiComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiModule {
}
ApiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ApiComponent],
                imports: [],
                exports: [ApiComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigurationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    initConfiguration(path) {
        return combineLatest(this.http.get(`${path}/ipConfig.json`), this.http.get(`${path}/settingsConfig.json`)).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        response => [this.ips, this.settingConfig] = response)), tap((/**
         * @param {?} response
         * @return {?}
         */
        response => console.log(this.ips, "lll")))).toPromise();
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject(HttpClient)); }, token: ConfigurationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfigurationService.prototype.ips;
    /** @type {?} */
    ConfigurationService.prototype.settingConfig;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/http-service.base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class HttpServiceBase {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    get$(httpRequest) {
        if (httpRequest.isText) {
            return this._get$(httpRequest);
        }
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    delete$(httpRequest) {
        return this.http.delete(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    post$(httpRequest) {
        console.log(httpRequest);
        if (httpRequest.isText) {
            return this._post$(httpRequest);
        }
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    request$(httpRequest) {
        return this.http.request('GET', httpRequest.fullUrl, {
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    requestPost$(httpRequest) {
        return this.http.request('POST', httpRequest.fullUrl, {
            body: Object.assign({}, httpRequest.body),
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _get$(httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _post$(httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
}
HttpServiceBase.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpServiceBase.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
if (false) {
    /** @type {?} */
    HttpServiceBase.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/students.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StudentsService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.url = "http://localhost:7900/student";
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}student/`;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStudentDetails$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentDetails',
            params: { id }
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStudentTasks$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentTasks',
            params: { id }
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStudentTalent$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentTalents',
            params: { id }
        }));
    }
    /**
     * @param {?} StudentId
     * @return {?}
     */
    getStudentbyStudentId$(StudentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentbyStudentId',
            params: { StudentId }
        }));
    }
    /**
     * @param {?} StudentId
     * @return {?}
     */
    getYears$(StudentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getYears',
            params: { StudentId }
        }));
    }
    /**
     * @param {?} TasksId
     * @return {?}
     */
    deleteTasks$(TasksId) {
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteTasks',
            params: { TasksId }
        }));
    }
    /**
     * @param {?} UpdateTasks
     * @return {?}
     */
    UpdateTasks$(UpdateTasks) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'UpdateTasks',
            body: UpdateTasks
        }));
    }
    /**
     * @return {?}
     */
    get CurrentStudent() {
        console.log(this.config);
        return this.studentDetails;
    }
}
StudentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ StudentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StudentsService_Factory() { return new StudentsService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: StudentsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    StudentsService.prototype.studentDetails;
    /** @type {?} */
    StudentsService.prototype.url;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/teachers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TeachersService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.students = [];
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}teacher/`;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getTeacherDetails$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'teacherDetails',
            params: { id }
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStudentsById$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'students',
            params: { id }
        }));
    }
    /**
     * @return {?}
     */
    getTalents$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talent',
        }));
    }
    /**
     * @param {?} classes
     * @param {?} talentId
     * @return {?}
     */
    getOneTalentForClass$(classes, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talents',
            params: { classes, talentId }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    addTalentForStudent$(firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addTalent',
            params: { firstName, LastName, talentId }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talent
     * @param {?} details
     * @return {?}
     */
    updateMoreDetails$(firstName, LastName, talent, details) {
        if (details == '') {
            details = 'null';
        }
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateMoreDetails',
            params: { firstName, LastName, talent, details }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    deleteTalentForStudent$(firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteTalent',
            params: { firstName, LastName, talentId }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    addAdviceForStudent$(firstName, LastName, talentId, count) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addAdvice',
            params: { firstName, LastName, talentId, count }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @param {?} count
     * @return {?}
     */
    updateAdviceForStudent$(firstName, LastName, talentId, count) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateAdvice',
            params: { firstName, LastName, talentId, count }
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} LastName
     * @param {?} talentId
     * @return {?}
     */
    deleteAdviceForStudent$(firstName, LastName, talentId) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteAdvice',
            params: { firstName, LastName, talentId }
        }));
    }
    /**
     * @param {?} nameTalent
     * @return {?}
     */
    addNewTalent$(nameTalent) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTalent',
            params: { nameTalent }
        }));
    }
    /**
     * @return {?}
     */
    get CurrentTeacher() {
        return this.teacherDetails;
    }
    /**
     * @return {?}
     */
    get CurrentStudents() {
        return this.students;
    }
}
TeachersService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ TeachersService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TeachersService_Factory() { return new TeachersService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: TeachersService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TeachersService.prototype.teacherDetails;
    /** @type {?} */
    TeachersService.prototype.students;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/admins.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdminsService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.options = { headers: new HttpHeaders({ Accept: 'application/json' }) };
        this.url = "http://localhost:7900/admin";
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}admin/`;
    }
    /**
     * @return {?}
     */
    getActivity$() {
        console.log("0000000000000000");
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'activityList',
        }));
    }
    /**
     * @return {?}
     */
    getTalents$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'talent',
        }));
    }
    /**
     * @return {?}
     */
    getYears$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'year',
        }));
    }
    /**
     * @param {?} classes
     * @return {?}
     */
    getStudentsByClass$(classes) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getStudentsByClass',
            params: { classes }
        }));
    }
    /**
     * @param {?} newStudent
     * @return {?}
     */
    insertStudents$(newStudent) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertStudents',
            params: newStudent
        }));
    }
    /**
     * @return {?}
     */
    Search$() {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'Search',
        }));
    }
    /**
     * @param {?} letter
     * @return {?}
     */
    getStudentsForFilter(letter) {
        return this.http.get(`${this.url}/studentsList/${letter}`);
    }
    /**
     * @param {?} form
     * @return {?}
     */
    insertTaskForStudent(form) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTaskForStudent',
            params: form
        }));
    }
    /**
     * @param {?} nameTalent
     * @return {?}
     */
    addNewTalent$(nameTalent) {
        console.log(nameTalent);
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertTalent',
            params: nameTalent
        }));
    }
    /**
     * @param {?} nameActivity
     * @return {?}
     */
    addNewActivity$(nameActivity) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertActivity',
            params: nameActivity
        }));
    }
    /**
     * @return {?}
     */
    getDate$() {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getDate'
        }));
    }
    /**
     * @param {?} Date
     * @return {?}
     */
    insertDate(Date) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'insertDate',
            body: { Date }
        }));
    }
    /**
     * @return {?}
     */
    updateClass$() {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateClass'
        }));
    }
    /**
     * @param {?} fileToUpload
     * @return {?}
     */
    postFile$(fileToUpload) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'files',
            body: fileToUpload,
        }));
    }
}
AdminsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ AdminsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AdminsService_Factory() { return new AdminsService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: AdminsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AdminsService.prototype.options;
    /** @type {?} */
    AdminsService.prototype.url;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/connection.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConnectionService extends HttpServiceBase {
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        console.log(this.config);
        return `${this.config.ips.servicePath}`;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getTypeUser$(id) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: id
        }));
    }
}
ConnectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ConnectionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConnectionService_Factory() { return new ConnectionService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: ConnectionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AdminsService, ApiComponent, ApiModule, ApiService, ConfigurationService, ConnectionService, StudentsService, TeachersService, HttpServiceBase as ɵa };
//# sourceMappingURL=api.js.map
