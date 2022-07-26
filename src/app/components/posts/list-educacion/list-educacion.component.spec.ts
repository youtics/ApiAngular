import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEducacionComponent } from './list-educacion.component';

describe('ListEducacionComponent', () => {
  let component: ListEducacionComponent;
  let fixture: ComponentFixture<ListEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
