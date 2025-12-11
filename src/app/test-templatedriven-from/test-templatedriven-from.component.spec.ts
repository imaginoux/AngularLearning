import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplatedrivenFromComponent } from './test-templatedriven-from.component';

describe('TestTemplatedrivenFromComponent', () => {
  let component: TestTemplatedrivenFromComponent;
  let fixture: ComponentFixture<TestTemplatedrivenFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTemplatedrivenFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTemplatedrivenFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
