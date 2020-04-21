import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOrderPageComponent } from './movie-order-page.component';

describe('MovieOrderPageComponent', () => {
  let component: MovieOrderPageComponent;
  let fixture: ComponentFixture<MovieOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
