import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubsPage } from './subs.page';

describe('SubsPage', () => {
  let component: SubsPage;
  let fixture: ComponentFixture<SubsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
