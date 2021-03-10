import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QdivhPage } from './qdivh.page';

describe('QdivhPage', () => {
  let component: QdivhPage;
  let fixture: ComponentFixture<QdivhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QdivhPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QdivhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
