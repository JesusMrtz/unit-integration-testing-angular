import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, observable, EMPTY, Subject } from 'rxjs';

class FakeRouter {
  navigate(params) {}
}

class FakeActivatedRoute {
  // paramas: Observable<any> = EMPTY;
  private subject = new Subject();

  get params() {
    return this.subject.asObservable();
  }

  push(value) {
    this.subject.next(value);
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a médico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.saveDoctor();
    console.log(spy());
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el ID = new', () => {
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({id: 'new'});

    expect(component.id).toBe('new');
  });

});
