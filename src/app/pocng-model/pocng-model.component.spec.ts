import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocngModelComponent } from './pocng-model.component';

describe('PocngModelComponent', () => {
  let component: PocngModelComponent;
  let fixture: ComponentFixture<PocngModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocngModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocngModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
