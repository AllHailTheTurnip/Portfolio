import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingViewComponent } from './programming-view.component';

describe('ProgrammingViewComponent', () => {
  let component: ProgrammingViewComponent;
  let fixture: ComponentFixture<ProgrammingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
