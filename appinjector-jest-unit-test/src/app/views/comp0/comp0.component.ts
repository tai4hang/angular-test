import { Component, OnInit, Injector } from '@angular/core';
import { Service0Service } from 'src/app/service0.service';
import { Service1Service } from 'src/app/service1.service';
import { AppInjector } from 'src/app/app-injector.service';

@Component({
  selector: 'app-comp0',
  templateUrl: './comp0.component.html',
  styleUrls: ['./comp0.component.css']
})
export class Comp0Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doTestComp0() {
    AppInjector.getInjector().get(Service0Service).getService0Message();
    AppInjector.getInjector().get(Service1Service).getService1Message();
  }

}
