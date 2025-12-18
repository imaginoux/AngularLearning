import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFormComponent } from './popup.component';

describe('PopupComponent', () => {
  let component: PopupFormComponent;
  let fixture: ComponentFixture<PopupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
