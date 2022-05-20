/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var HttpRequestModel = /** @class */ (function () {
    function HttpRequestModel(copy) {
        this.params = {};
        this.body = {};
        Object.assign(this, copy);
        this.params = Object.entries(this.params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = tslib_1.__read(_a, 2), key = _c[0], val = _c[1];
            return (tslib_1.__assign({}, state, (_b = {}, _b[key] = val, _b)));
        }), {});
        if (Array.isArray(this.body)) {
            return;
        }
        this.body = Object.entries(this.body)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = tslib_1.__read(_a, 2), key = _c[0], val = _c[1];
            return (tslib_1.__assign({}, state, (_b = {}, _b[key] = val, _b)));
        }), {});
        this.body = Object.keys(this.body).length ? this.body : null;
    }
    Object.defineProperty(HttpRequestModel.prototype, "queryParams", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = this._queryParams(this.params);
            return /&/.test(result) ? "?" + result : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    HttpRequestModel.prototype._queryParams = /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    function (params, prefix) {
        var _this = this;
        if (prefix === void 0) { prefix = ''; }
        /** @type {?} */
        var result = Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[1];
            return typeof (value) !== 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return "" + prefix + key + "=" + decodeURIComponent(value);
        }))
            .join('&');
        return Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[1];
            return typeof (value) === 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return _this._queryParams(value, key + ".");
        }))
            .concat(result)
            .join('&');
    };
    Object.defineProperty(HttpRequestModel.prototype, "fullUrl", {
        get: /**
         * @return {?}
         */
        function () { return "" + this.url + this.action; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpRequestModel.prototype, "fullParams", {
        get: /**
         * @return {?}
         */
        function () {
            return this.params;
        },
        enumerable: true,
        configurable: true
    });
    return HttpRequestModel;
}());
export { HttpRequestModel };
if (false) {
    /** @type {?} */
    HttpRequestModel.prototype.component;
    /** @type {?} */
    HttpRequestModel.prototype.logMessage;
    /** @type {?} */
    HttpRequestModel.prototype.url;
    /** @type {?} */
    HttpRequestModel.prototype.action;
    /** @type {?} */
    HttpRequestModel.prototype.params;
    /** @type {?} */
    HttpRequestModel.prototype.body;
    /** @type {?} */
    HttpRequestModel.prototype.isText;
    /** @type {?} */
    HttpRequestModel.prototype.headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHlwZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9odHRwLXJlcXVlc3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7SUFVRSwwQkFBWSxJQUFnQztRQUw1QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFLYixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN0QyxNQUFNOzs7O1FBQUMsVUFBQyxFQUFPO2dCQUFQLDBCQUFPLEVBQUosV0FBRztZQUFNLE9BQUEsR0FBRyxLQUFLLElBQUk7UUFBWixDQUFZLEVBQUM7YUFDakMsTUFBTTs7OztRQUFDLFVBQUMsRUFBTztnQkFBUCwwQkFBTyxFQUFKLFdBQUc7WUFBTSxPQUFBLEdBQUcsS0FBSyxTQUFTO1FBQWpCLENBQWlCLEVBQUM7YUFDdEMsTUFBTTs7Ozs7UUFBQyxVQUFDLEtBQUssRUFBRSxFQUFVOztnQkFBViwwQkFBVSxFQUFULFdBQUcsRUFBRSxXQUFHO1lBQU0sT0FBQSxzQkFBTSxLQUFLLGVBQUcsR0FBRyxJQUFHLEdBQUcsT0FBRztRQUExQixDQUEwQixHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEMsTUFBTTs7OztRQUFDLFVBQUMsRUFBTztnQkFBUCwwQkFBTyxFQUFKLFdBQUc7WUFBTSxPQUFBLEdBQUcsS0FBSyxJQUFJO1FBQVosQ0FBWSxFQUFDO2FBQ2pDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQU87Z0JBQVAsMEJBQU8sRUFBSixXQUFHO1lBQU0sT0FBQSxHQUFHLEtBQUssU0FBUztRQUFqQixDQUFpQixFQUFDO2FBQ3RDLE1BQU07Ozs7O1FBQUMsVUFBQyxLQUFLLEVBQUUsRUFBVTs7Z0JBQVYsMEJBQVUsRUFBVCxXQUFHLEVBQUUsV0FBRztZQUFNLE9BQUEsc0JBQzFCLEtBQUssZUFBRyxHQUFHLElBQUcsR0FBRyxPQUNwQjtRQUY2QixDQUU3QixHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVYsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRUQsc0JBQUkseUNBQVc7Ozs7UUFBZjs7Z0JBRVEsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUU3QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUksTUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7Ozs7Ozs7SUFFTyx1Q0FBWTs7Ozs7O0lBQXBCLFVBQXFCLE1BQWMsRUFBRSxNQUFtQjtRQUF4RCxpQkFXQztRQVhvQyx1QkFBQSxFQUFBLFdBQW1COztZQUNoRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDbEMsTUFBTTs7OztRQUFDLFVBQUMsRUFBUztnQkFBVCwwQkFBUyxFQUFOLGFBQUs7WUFBTSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRO1FBQTNCLENBQTJCLEVBQUM7YUFDbEQsR0FBRzs7OztRQUFDLFVBQUMsRUFBWTtnQkFBWiwwQkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO1lBQU0sT0FBQSxLQUFHLE1BQU0sR0FBRyxHQUFHLFNBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFHO1FBQTlDLENBQThDLEVBQUM7YUFDckUsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVaLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDMUIsTUFBTTs7OztRQUFDLFVBQUMsRUFBUztnQkFBVCwwQkFBUyxFQUFOLGFBQUs7WUFBTSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRO1FBQTNCLENBQTJCLEVBQUM7YUFDbEQsR0FBRzs7OztRQUFDLFVBQUMsRUFBWTtnQkFBWiwwQkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO1lBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBSyxHQUFHLE1BQUcsQ0FBQztRQUFuQyxDQUFtQyxFQUFDO2FBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsc0JBQUkscUNBQU87Ozs7UUFBWCxjQUFnQixPQUFPLEtBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFckQsc0JBQUksd0NBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQzs7OztJQXREQyxxQ0FBa0I7O0lBQ2xCLHNDQUFtQjs7SUFDbkIsK0JBQVk7O0lBQ1osa0NBQWU7O0lBQ2Ysa0NBQW9COztJQUNwQixnQ0FBZTs7SUFDZixrQ0FBZ0I7O0lBQ2hCLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0TW9kZWwge1xyXG4gIGNvbXBvbmVudDogc3RyaW5nO1xyXG4gIGxvZ01lc3NhZ2U6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBhY3Rpb246IHN0cmluZztcclxuICBwYXJhbXM6IG9iamVjdCA9IHt9O1xyXG4gIGJvZHk6IGFueSA9IHt9O1xyXG4gIGlzVGV4dDogYm9vbGVhbjtcclxuICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuXHJcbiAgY29uc3RydWN0b3IoY29weT86IFBhcnRpYWw8SHR0cFJlcXVlc3RNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29weSk7XHJcblxyXG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuZW50cmllcyh0aGlzLnBhcmFtcylcclxuICAgICAgLmZpbHRlcigoWywgdmFsXSkgPT4gdmFsICE9PSBudWxsKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWxdKSA9PiB2YWwgIT09IHVuZGVmaW5lZClcclxuICAgICAgLnJlZHVjZSgoc3RhdGUsIFtrZXksIHZhbF0pID0+ICh7IC4uLnN0YXRlLCBba2V5XTogdmFsIH0pLCB7fSk7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5ib2R5KSkgeyByZXR1cm47IH1cclxuXHJcbiAgICB0aGlzLmJvZHkgPSBPYmplY3QuZW50cmllcyh0aGlzLmJvZHkpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gbnVsbClcclxuICAgICAgLmZpbHRlcigoWywgdmFsXSkgPT4gdmFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIC5yZWR1Y2UoKHN0YXRlLCBba2V5LCB2YWxdKSA9PiAoe1xyXG4gICAgICAgIC4uLnN0YXRlLCBba2V5XTogdmFsXHJcbiAgICAgIH0pLCB7fSk7XHJcblxyXG4gICAgdGhpcy5ib2R5ID0gT2JqZWN0LmtleXModGhpcy5ib2R5KS5sZW5ndGggPyB0aGlzLmJvZHkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHF1ZXJ5UGFyYW1zKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3F1ZXJ5UGFyYW1zKHRoaXMucGFyYW1zKTtcclxuXHJcbiAgICByZXR1cm4gLyYvLnRlc3QocmVzdWx0KSA/IGA/JHtyZXN1bHR9YCA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcXVlcnlQYXJhbXMocGFyYW1zOiBvYmplY3QsIHByZWZpeDogc3RyaW5nID0gJycpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMocGFyYW1zKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWx1ZV0pID0+IHR5cGVvZiAodmFsdWUpICE9PSAnb2JqZWN0JylcclxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtwcmVmaXh9JHtrZXl9PSR7ZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gKVxyXG4gICAgICAuam9pbignJicpO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhwYXJhbXMpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbHVlXSkgPT4gdHlwZW9mICh2YWx1ZSkgPT09ICdvYmplY3QnKVxyXG4gICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHRoaXMuX3F1ZXJ5UGFyYW1zKHZhbHVlLCBgJHtrZXl9LmApKVxyXG4gICAgICAuY29uY2F0KHJlc3VsdClcclxuICAgICAgLmpvaW4oJyYnKTtcclxuICB9XHJcblxyXG4gIGdldCBmdWxsVXJsKCkgeyByZXR1cm4gYCR7dGhpcy51cmx9JHt0aGlzLmFjdGlvbn1gOyB9XHJcblxyXG4gIGdldCBmdWxsUGFyYW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xyXG4gIH1cclxufVxyXG4iXX0=