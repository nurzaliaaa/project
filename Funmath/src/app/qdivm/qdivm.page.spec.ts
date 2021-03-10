import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QdivmPage } from './qdivm.page';

describe('QdivmPage', () => {
  let component: QdivmPage;
  let fixture: ComponentFixture<QdivmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QdivmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QdivmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
