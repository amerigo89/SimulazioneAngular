import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpiegatiComponent } from './impiegati.component';

describe('ImpiegatiComponent', () => {
  let component: ImpiegatiComponent;
  let fixture: ComponentFixture<ImpiegatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpiegatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpiegatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
