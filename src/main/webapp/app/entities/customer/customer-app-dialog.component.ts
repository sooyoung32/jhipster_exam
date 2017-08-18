import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService } from 'ng-jhipster';

import { CustomerApp } from './customer-app.model';
import { CustomerAppPopupService } from './customer-app-popup.service';
import { CustomerAppService } from './customer-app.service';
import { User, UserService } from '../../shared';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-customer-app-dialog',
    templateUrl: './customer-app-dialog.component.html'
})
export class CustomerAppDialogComponent implements OnInit {

    customer: CustomerApp;
    authorities: any[];
    isSaving: boolean;

    users: User[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private customerService: CustomerAppService,
        private userService: UserService,
        private eventManager: EventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.userService.query()
            .subscribe((res: ResponseWrapper) => { this.users = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }
    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.customer.id !== undefined) {
            this.subscribeToSaveResponse(
                this.customerService.update(this.customer), false);
        } else {
            this.subscribeToSaveResponse(
                this.customerService.create(this.customer), true);
        }
    }

    private subscribeToSaveResponse(result: Observable<CustomerApp>, isCreated: boolean) {
        result.subscribe((res: CustomerApp) =>
            this.onSaveSuccess(res, isCreated), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: CustomerApp, isCreated: boolean) {
        this.alertService.success(
            isCreated ? 'jhipsterApp.customer.created'
            : 'jhipsterApp.customer.updated',
            { param : result.id }, null);

        this.eventManager.broadcast({ name: 'customerListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    trackUserById(index: number, item: User) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-customer-app-popup',
    template: ''
})
export class CustomerAppPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private customerPopupService: CustomerAppPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.customerPopupService
                    .open(CustomerAppDialogComponent, params['id']);
            } else {
                this.modalRef = this.customerPopupService
                    .open(CustomerAppDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
