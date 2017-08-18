import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, EventManager } from 'ng-jhipster';

import { CustomerApp } from './customer-app.model';
import { CustomerAppPopupService } from './customer-app-popup.service';
import { CustomerAppService } from './customer-app.service';

@Component({
    selector: 'jhi-customer-app-delete-dialog',
    templateUrl: './customer-app-delete-dialog.component.html'
})
export class CustomerAppDeleteDialogComponent {

    customer: CustomerApp;

    constructor(
        private customerService: CustomerAppService,
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private eventManager: EventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.customerService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'customerListModification',
                content: 'Deleted an customer'
            });
            this.activeModal.dismiss(true);
        });
        this.alertService.success('jhipsterApp.customer.deleted', { param : id }, null);
    }
}

@Component({
    selector: 'jhi-customer-app-delete-popup',
    template: ''
})
export class CustomerAppDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private customerPopupService: CustomerAppPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.customerPopupService
                .open(CustomerAppDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
