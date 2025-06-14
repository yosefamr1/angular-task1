import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whatido } from './whatido';

describe('Whatido', () => {
  let component: Whatido;
  let fixture: ComponentFixture<Whatido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whatido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whatido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
