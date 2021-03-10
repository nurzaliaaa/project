import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DivPage } from './div.page';

describe('DivPage', () => {
  let component: DivPage;
  let fixture: ComponentFixture<DivPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
