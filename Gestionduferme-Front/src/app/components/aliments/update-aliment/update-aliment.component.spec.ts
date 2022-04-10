import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlimentComponent } from './update-aliment.component';

describe('UpdateAlimentComponent', () => {
  let component: UpdateAlimentComponent;
  let fixture: ComponentFixture<UpdateAlimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAlimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
