/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class HttpRequestModel {
    /**
     * @param {?=} copy
     */
    constructor(copy) {
        this.params = {};
        this.body = {};
        Object.assign(this, copy);
        this.params = Object.entries(this.params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== null))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== undefined))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        (state, [key, val]) => (Object.assign({}, state, { [key]: val }))), {});
        if (Array.isArray(this.body)) {
            return;
        }
        this.body = Object.entries(this.body)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== null))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== undefined))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        (state, [key, val]) => (Object.assign({}, state, { [key]: val }))), {});
        this.body = Object.keys(this.body).length ? this.body : null;
    }
    /**
     * @return {?}
     */
    get queryParams() {
        /** @type {?} */
        const result = this._queryParams(this.params);
        return /&/.test(result) ? `?${result}` : '';
    }
    /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    _queryParams(params, prefix = '') {
        /** @type {?} */
        const result = Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, value]) => typeof (value) !== 'object'))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => `${prefix}${key}=${decodeURIComponent(value)}`))
            .join('&');
        return Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, value]) => typeof (value) === 'object'))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => this._queryParams(value, `${key}.`)))
            .concat(result)
            .join('&');
    }
    /**
     * @return {?}
     */
    get fullUrl() { return `${this.url}${this.action}`; }
    /**
     * @return {?}
     */
    get fullParams() {
        return this.params;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHlwZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9odHRwLXJlcXVlc3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBVTNCLFlBQVksSUFBZ0M7UUFMNUMsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBS2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDdEMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFDO2FBQ2pDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBQzthQUN0QyxNQUFNOzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxtQkFBTSxLQUFLLElBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUcsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUVqRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksRUFBQzthQUNqQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUM7YUFDdEMsTUFBTTs7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsbUJBQzFCLEtBQUssSUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFDcEIsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUVWLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELElBQUksV0FBVzs7Y0FFUCxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTdDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7SUFFTyxZQUFZLENBQUMsTUFBYyxFQUFFLFNBQWlCLEVBQUU7O2NBQ2hELE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUNsQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUM7YUFDbEQsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDO2FBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFWixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzFCLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBQzthQUNsRCxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFDO2FBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPLEtBQUssT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs7OztJQUVyRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztDQUNGOzs7SUF0REMscUNBQWtCOztJQUNsQixzQ0FBbUI7O0lBQ25CLCtCQUFZOztJQUNaLGtDQUFlOztJQUNmLGtDQUFvQjs7SUFDcEIsZ0NBQWU7O0lBQ2Ysa0NBQWdCOztJQUNoQixtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdE1vZGVsIHtcclxuICBjb21wb25lbnQ6IHN0cmluZztcclxuICBsb2dNZXNzYWdlOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgcGFyYW1zOiBvYmplY3QgPSB7fTtcclxuICBib2R5OiBhbnkgPSB7fTtcclxuICBpc1RleHQ6IGJvb2xlYW47XHJcbiAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvcHk/OiBQYXJ0aWFsPEh0dHBSZXF1ZXN0TW9kZWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvcHkpO1xyXG5cclxuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmVudHJpZXModGhpcy5wYXJhbXMpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gbnVsbClcclxuICAgICAgLmZpbHRlcigoWywgdmFsXSkgPT4gdmFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIC5yZWR1Y2UoKHN0YXRlLCBba2V5LCB2YWxdKSA9PiAoeyAuLi5zdGF0ZSwgW2tleV06IHZhbCB9KSwge30pO1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuYm9keSkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgdGhpcy5ib2R5ID0gT2JqZWN0LmVudHJpZXModGhpcy5ib2R5KVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWxdKSA9PiB2YWwgIT09IG51bGwpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAucmVkdWNlKChzdGF0ZSwgW2tleSwgdmFsXSkgPT4gKHtcclxuICAgICAgICAuLi5zdGF0ZSwgW2tleV06IHZhbFxyXG4gICAgICB9KSwge30pO1xyXG5cclxuICAgIHRoaXMuYm9keSA9IE9iamVjdC5rZXlzKHRoaXMuYm9keSkubGVuZ3RoID8gdGhpcy5ib2R5IDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBxdWVyeVBhcmFtcygpIHtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9xdWVyeVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcblxyXG4gICAgcmV0dXJuIC8mLy50ZXN0KHJlc3VsdCkgPyBgPyR7cmVzdWx0fWAgOiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3F1ZXJ5UGFyYW1zKHBhcmFtczogb2JqZWN0LCBwcmVmaXg6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHBhcmFtcylcclxuICAgICAgLmZpbHRlcigoWywgdmFsdWVdKSA9PiB0eXBlb2YgKHZhbHVlKSAhPT0gJ29iamVjdCcpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7cHJlZml4fSR7a2V5fT0ke2RlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YClcclxuICAgICAgLmpvaW4oJyYnKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGFyYW1zKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWx1ZV0pID0+IHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JylcclxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB0aGlzLl9xdWVyeVBhcmFtcyh2YWx1ZSwgYCR7a2V5fS5gKSlcclxuICAgICAgLmNvbmNhdChyZXN1bHQpXHJcbiAgICAgIC5qb2luKCcmJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgZnVsbFVybCgpIHsgcmV0dXJuIGAke3RoaXMudXJsfSR7dGhpcy5hY3Rpb259YDsgfVxyXG5cclxuICBnZXQgZnVsbFBhcmFtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmFtcztcclxuICB9XHJcbn1cclxuIl19