import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    OrderItemsService,
    OrderItemsPopupService,
    OrderItemsComponent,
    OrderItemsDetailComponent,
    OrderItemsDialogComponent,
    OrderItemsPopupComponent,
    OrderItemsDeletePopupComponent,
    OrderItemsDeleteDialogComponent,
    orderItemsRoute,
    orderItemsPopupRoute,
} from './';

const ENTITY_STATES = [
    ...orderItemsRoute,
    ...orderItemsPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        OrderItemsComponent,
        OrderItemsDetailComponent,
        OrderItemsDialogComponent,
        OrderItemsDeleteDialogComponent,
        OrderItemsPopupComponent,
        OrderItemsDeletePopupComponent,
    ],
    entryComponents: [
        OrderItemsComponent,
        OrderItemsDialogComponent,
        OrderItemsPopupComponent,
        OrderItemsDeleteDialogComponent,
        OrderItemsDeletePopupComponent,
    ],
    providers: [
        OrderItemsService,
        OrderItemsPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterOrderItemsModule {}
