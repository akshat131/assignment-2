import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminationComponent } from './alumination.component';

describe('AluminationComponent', () => {
  let component: AluminationComponent;
  let fixture: ComponentFixture<AluminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
