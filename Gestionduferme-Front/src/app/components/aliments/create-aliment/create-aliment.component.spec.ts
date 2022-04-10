import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlimentComponent } from './create-aliment.component';

describe('CreateAlimentComponent', () => {
  let component: CreateAlimentComponent;
  let fixture: ComponentFixture<CreateAlimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
