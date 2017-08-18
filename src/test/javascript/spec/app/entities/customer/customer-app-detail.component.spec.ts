import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { JhipsterTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CustomerAppDetailComponent } from '../../../../../../main/webapp/app/entities/customer/customer-app-detail.component';
import { CustomerAppService } from '../../../../../../main/webapp/app/entities/customer/customer-app.service';
import { CustomerApp } from '../../../../../../main/webapp/app/entities/customer/customer-app.model';

describe('Component Tests', () => {

    describe('CustomerApp Management Detail Component', () => {
        let comp: CustomerAppDetailComponent;
        let fixture: ComponentFixture<CustomerAppDetailComponent>;
        let service: CustomerAppService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [CustomerAppDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    CustomerAppService,
                    EventManager
                ]
            }).overrideTemplate(CustomerAppDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CustomerAppDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CustomerAppService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new CustomerApp(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.customer).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
