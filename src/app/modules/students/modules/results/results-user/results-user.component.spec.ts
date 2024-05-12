import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsUserComponent } from './results-user.component';

describe('ResultsUserComponent', () => {
  let component: ResultsUserComponent;
  let fixture: ComponentFixture<ResultsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsUserComponent]
    });
    fixture = TestBed.createComponent(ResultsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
