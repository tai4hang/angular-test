import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Component } from './comp1.component';
import { Injector } from '@angular/core';
import { Service0Service } from 'src/app/service0.service';
import { Service1Service } from 'src/app/service1.service';
import { AppInjector } from 'src/app/app-injector.service';


class MockService0Service {
  getService0Message() {
    console.log('MOCKed called mocked service0 to get mock data');
  }
}
class MockService1Service {
  getService1Message() {
    console.log('MOCKed called mocked service111 to get mock data');
  }
}

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const injector = Injector.create({providers:
      [{provide: Service0Service, useClass: MockService0Service, deps: []},
      {provide: Service1Service, useClass: MockService1Service, deps: []}
    ]});

    AppInjector.setInjector(injector);

    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new Comp1Component();
  });

  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test s0 msg', () => {
    component.doTestComp0();
  });

  it('test s1 msg', () => {
    component.doTestComp1();
  });

});
