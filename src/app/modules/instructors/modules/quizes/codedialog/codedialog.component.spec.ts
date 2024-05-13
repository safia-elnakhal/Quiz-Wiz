import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedialogComponent } from './codedialog.component';

describe('CodedialogComponent', () => {
  let component: CodedialogComponent;
  let fixture: ComponentFixture<CodedialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodedialogComponent]
    });
    fixture = TestBed.createComponent(CodedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
