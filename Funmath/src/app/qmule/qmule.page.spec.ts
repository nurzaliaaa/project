import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QmulePage } from './qmule.page';

describe('QmulePage', () => {
  let component: QmulePage;
  let fixture: ComponentFixture<QmulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QmulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
