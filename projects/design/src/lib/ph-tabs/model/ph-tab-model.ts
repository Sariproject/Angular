import { TemplateRef } from '@angular/core';

export interface PhTabModel {
    header: string;
    value: any;
    tmpl?: TemplateRef<any>;
    disabled?: boolean;
    context?: any;
}