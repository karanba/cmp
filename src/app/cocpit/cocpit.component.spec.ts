import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocpitComponent } from './cocpit.component';

describe('CocpitComponent', () => {
  let component: CocpitComponent;
  let fixture: ComponentFixture<CocpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
