import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormTest01Component } from './template-driven-form-test-01.component';

describe('TemplateDrivenFormTest01Component', () => {
  let component: TemplateDrivenFormTest01Component;
  let fixture: ComponentFixture<TemplateDrivenFormTest01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormTest01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormTest01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
