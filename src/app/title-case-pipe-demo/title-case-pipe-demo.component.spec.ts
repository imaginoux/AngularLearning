import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCasePipeDemoComponent } from './title-case-pipe-demo.component';

describe('TitleCasePipeDemoComponent', () => {
  let component: TitleCasePipeDemoComponent;
  let fixture: ComponentFixture<TitleCasePipeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCasePipeDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCasePipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
