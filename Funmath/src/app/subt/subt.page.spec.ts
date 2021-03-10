import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubtPage } from './subt.page';

describe('SubtPage', () => {
  let component: SubtPage;
  let fixture: ComponentFixture<SubtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
