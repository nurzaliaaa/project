import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QsubePage } from './qsube.page';

describe('QsubePage', () => {
  let component: QsubePage;
  let fixture: ComponentFixture<QsubePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsubePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QsubePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
