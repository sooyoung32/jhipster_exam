import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import { JhipsterAdminModule } from '../../admin/admin.module';
import {
    CustomerAppService,
    CustomerAppPopupService,
    CustomerAppComponent,
    CustomerAppDetailComponent,
    CustomerAppDialogComponent,
    CustomerAppPopupComponent,
    CustomerAppDeletePopupComponent,
    CustomerAppDeleteDialogComponent,
    customerRoute,
    customerPopupRoute,
} from './';

const ENTITY_STATES = [
    ...customerRoute,
    ...customerPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        JhipsterAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CustomerAppComponent,
        CustomerAppDetailComponent,
        CustomerAppDialogComponent,
        CustomerAppDeleteDialogComponent,
        CustomerAppPopupComponent,
        CustomerAppDeletePopupComponent,
    ],
    entryComponents: [
        CustomerAppComponent,
        CustomerAppDialogComponent,
        CustomerAppPopupComponent,
        CustomerAppDeleteDialogComponent,
        CustomerAppDeletePopupComponent,
    ],
    providers: [
        CustomerAppService,
        CustomerAppPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterCustomerAppModule {}
