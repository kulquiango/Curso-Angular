import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformactionComponent } from './informaction.component';

describe('InformactionComponent', () => {
  let component: InformactionComponent;
  let fixture: ComponentFixture<InformactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
