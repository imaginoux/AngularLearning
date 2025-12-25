import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TATBreachedComponent } from './tat-breached.component';

describe('TATBreachedComponent', () => {
  let component: TATBreachedComponent;
  let fixture: ComponentFixture<TATBreachedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TATBreachedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TATBreachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
