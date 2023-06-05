import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorComponent } from './convertidor.component';

describe('ConvertidorComponent', () => {
  let component: ConvertidorComponent;
  let fixture: ComponentFixture<ConvertidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertidorComponent]
    });
    fixture = TestBed.createComponent(ConvertidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
