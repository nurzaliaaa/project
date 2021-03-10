import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QsubmPage } from './qsubm.page';

describe('QsubmPage', () => {
  let component: QsubmPage;
  let fixture: ComponentFixture<QsubmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsubmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QsubmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
