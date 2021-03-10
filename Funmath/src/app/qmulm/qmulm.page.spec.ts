import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QmulmPage } from './qmulm.page';

describe('QmulmPage', () => {
  let component: QmulmPage;
  let fixture: ComponentFixture<QmulmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmulmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QmulmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
