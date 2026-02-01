import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr32 } from './nr-32';

describe('Nr32', () => {
  let component: Nr32;
  let fixture: ComponentFixture<Nr32>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr32]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr32);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
