import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DividePage } from './divide.page';

describe('DividePage', () => {
  let component: DividePage;
  let fixture: ComponentFixture<DividePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DividePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
