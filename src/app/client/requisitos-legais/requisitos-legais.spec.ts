import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosLegais } from './requisitos-legais';

describe('RequisitosLegais', () => {
  let component: RequisitosLegais;
  let fixture: ComponentFixture<RequisitosLegais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisitosLegais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitosLegais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
