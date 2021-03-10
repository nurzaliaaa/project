import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MulPage } from './mul.page';

describe('MulPage', () => {
  let component: MulPage;
  let fixture: ComponentFixture<MulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
