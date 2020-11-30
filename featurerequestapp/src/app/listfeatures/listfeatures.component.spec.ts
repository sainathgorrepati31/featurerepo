import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfeaturesComponent } from './listfeatures.component';

describe('ListfeaturesComponent', () => {
  let component: ListfeaturesComponent;
  let fixture: ComponentFixture<ListfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
