import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfromComponent } from './transfrom.component';

describe('TransfromComponent', () => {
  let component: TransfromComponent;
  let fixture: ComponentFixture<TransfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransfromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
