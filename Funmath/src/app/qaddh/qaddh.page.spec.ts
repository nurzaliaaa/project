import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QaddhPage } from './qaddh.page';

describe('QaddhPage', () => {
  let component: QaddhPage;
  let fixture: ComponentFixture<QaddhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaddhPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QaddhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
