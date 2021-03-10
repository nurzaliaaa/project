import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QsubhPage } from './qsubh.page';

describe('QsubhPage', () => {
  let component: QsubhPage;
  let fixture: ComponentFixture<QsubhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsubhPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QsubhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
