import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthalertComponent } from './widthalert.component';

describe('WidthalertComponent', () => {
  let component: WidthalertComponent;
  let fixture: ComponentFixture<WidthalertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidthalertComponent]
    });
    fixture = TestBed.createComponent(WidthalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
