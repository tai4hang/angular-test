import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Component } from './comp1.component';
import { ServiceLocator } from 'src/app/service-locator';

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;
  let serviceLocator: ServiceLocator;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    serviceLocator = new ServiceLocator(this.injector());
    component = new Comp1Component(serviceLocator);
  });

  afterEach(() => {
    serviceLocator = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test s0 msg', () => {
    spyOn(serviceLocator, 'getService0').and.returnValue(true);
    component.doTestComp0();
  });

  it('test s1 msg', () => {
    component.doTestComp1();
  });

});
