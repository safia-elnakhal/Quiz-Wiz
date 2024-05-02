import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroupComponent } from './delete-group.component';

describe('DeleteGroupComponent', () => {
  let component: DeleteGroupComponent;
  let fixture: ComponentFixture<DeleteGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteGroupComponent]
    });
    fixture = TestBed.createComponent(DeleteGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
