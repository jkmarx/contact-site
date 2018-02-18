import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyShareComponent } from './nanny-share.component';

describe('NannyShareComponent', () => {
  let component: NannyShareComponent;
  let fixture: ComponentFixture<NannyShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannyShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
