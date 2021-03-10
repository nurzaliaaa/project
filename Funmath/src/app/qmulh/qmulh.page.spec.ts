import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QmulhPage } from './qmulh.page';

describe('QmulhPage', () => {
  let component: QmulhPage;
  let fixture: ComponentFixture<QmulhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmulhPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QmulhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
