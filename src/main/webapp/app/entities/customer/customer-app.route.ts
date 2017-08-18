import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { CustomerAppComponent } from './customer-app.component';
import { CustomerAppDetailComponent } from './customer-app-detail.component';
import { CustomerAppPopupComponent } from './customer-app-dialog.component';
import { CustomerAppDeletePopupComponent } from './customer-app-delete-dialog.component';

import { Principal } from '../../shared';

export const customerRoute: Routes = [
    {
        path: 'customer-app',
        component: CustomerAppComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.customer.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'customer-app/:id',
        component: CustomerAppDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.customer.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const customerPopupRoute: Routes = [
    {
        path: 'customer-app-new',
        component: CustomerAppPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.customer.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'customer-app/:id/edit',
        component: CustomerAppPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.customer.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'customer-app/:id/delete',
        component: CustomerAppDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.customer.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
