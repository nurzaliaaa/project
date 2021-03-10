import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QaddmPage } from './qaddm.page';

describe('QaddmPage', () => {
  let component: QaddmPage;
  let fixture: ComponentFixture<QaddmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaddmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QaddmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
