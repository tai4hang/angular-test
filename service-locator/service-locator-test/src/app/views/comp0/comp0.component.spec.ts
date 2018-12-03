import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp0Component } from './comp0.component';
import { Service0Service } from 'src/app/service0.service';
import { Service1Service } from 'src/app/service1.service';
import { ServiceLocator } from 'src/app/service-locator';
import { Injector } from '@angular/core';

class MockService0Service {
  getService0Message() {
    console.log("MOCKed called mocked service0 to get mock data");
  }
}
class MockService1Service {
  getService1Message() {
    console.log("MOCKed called mocked service111 to get mock data");
  }
}

class MockServiceLocator extends ServiceLocator {
  constructor() { super(null); }

  getService0(): MockService0Service {
      return new MockService0Service();
  }

  getService1(): MockService1Service {
      return new MockService1Service();
  }
}

describe('Comp0Component', () => {
  let component: Comp0Component;
  let fixture: ComponentFixture<Comp0Component>;
  let serviceLocator: MockServiceLocator;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    serviceLocator = new MockServiceLocator();
    component = new Comp0Component(serviceLocator);
  });

  afterEach(() => {
    serviceLocator = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test s0 msg', () => {
    component.doTestComp0();
  });
});
