import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WipSectionComponent } from './wip-section.component';

describe('WipSectionComponent', () => {
  let component: WipSectionComponent;
  let fixture: ComponentFixture<WipSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WipSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WipSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
