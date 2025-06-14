import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skilles } from './skilles';

describe('Skilles', () => {
  let component: Skilles;
  let fixture: ComponentFixture<Skilles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skilles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skilles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
