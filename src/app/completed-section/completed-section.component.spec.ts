import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedSectionComponent } from './completed-section.component';

describe('CompletedSectionComponent', () => {
  let component: CompletedSectionComponent;
  let fixture: ComponentFixture<CompletedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
