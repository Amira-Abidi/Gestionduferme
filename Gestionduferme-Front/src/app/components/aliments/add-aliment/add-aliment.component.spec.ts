import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlimentComponent } from './add-aliment.component';

describe('AddAlimentComponent', () => {
  let component: AddAlimentComponent;
  let fixture: ComponentFixture<AddAlimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
