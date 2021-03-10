import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QaddePage } from './qadde.page';

describe('QaddePage', () => {
  let component: QaddePage;
  let fixture: ComponentFixture<QaddePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaddePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QaddePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
