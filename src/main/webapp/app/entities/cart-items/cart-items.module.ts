import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    CartItemsService,
    CartItemsPopupService,
    CartItemsComponent,
    CartItemsDetailComponent,
    CartItemsDialogComponent,
    CartItemsPopupComponent,
    CartItemsDeletePopupComponent,
    CartItemsDeleteDialogComponent,
    cartItemsRoute,
    cartItemsPopupRoute,
} from './';

const ENTITY_STATES = [
    ...cartItemsRoute,
    ...cartItemsPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CartItemsComponent,
        CartItemsDetailComponent,
        CartItemsDialogComponent,
        CartItemsDeleteDialogComponent,
        CartItemsPopupComponent,
        CartItemsDeletePopupComponent,
    ],
    entryComponents: [
        CartItemsComponent,
        CartItemsDialogComponent,
        CartItemsPopupComponent,
        CartItemsDeleteDialogComponent,
        CartItemsDeletePopupComponent,
    ],
    providers: [
        CartItemsService,
        CartItemsPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterCartItemsModule {}
