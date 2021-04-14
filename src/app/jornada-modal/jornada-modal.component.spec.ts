import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaModalComponent } from './jornada-modal.component';

describe('JornadaModalComponent', () => {
  let component: JornadaModalComponent;
  let fixture: ComponentFixture<JornadaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
