import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QdivePage } from './qdive.page';

describe('QdivePage', () => {
  let component: QdivePage;
  let fixture: ComponentFixture<QdivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QdivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QdivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
