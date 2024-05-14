import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedSuccessfullyComponent } from './joined-successfully.component';

describe('JoinedSuccessfullyComponent', () => {
  let component: JoinedSuccessfullyComponent;
  let fixture: ComponentFixture<JoinedSuccessfullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinedSuccessfullyComponent]
    });
    fixture = TestBed.createComponent(JoinedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
