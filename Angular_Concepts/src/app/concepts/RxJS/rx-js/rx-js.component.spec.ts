import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSComponent } from './rx-js.component';

describe('RxJSComponent', () => {
  let component: RxJSComponent;
  let fixture: ComponentFixture<RxJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
