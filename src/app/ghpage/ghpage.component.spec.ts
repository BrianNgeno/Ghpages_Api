import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhpageComponent } from './ghpage.component';

describe('GhpageComponent', () => {
  let component: GhpageComponent;
  let fixture: ComponentFixture<GhpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
