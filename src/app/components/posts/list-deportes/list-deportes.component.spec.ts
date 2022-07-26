import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeportesComponent } from './list-deportes.component';

describe('ListDeportesComponent', () => {
  let component: ListDeportesComponent;
  let fixture: ComponentFixture<ListDeportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
