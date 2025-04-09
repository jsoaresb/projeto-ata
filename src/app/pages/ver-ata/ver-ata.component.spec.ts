import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAtaComponent } from './ver-ata.component';

describe('VerAtaComponent', () => {
  let component: VerAtaComponent;
  let fixture: ComponentFixture<VerAtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerAtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerAtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
