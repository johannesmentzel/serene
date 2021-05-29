import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWelcomeComponent } from './content-welcome.component';

describe('ContentWelcomeComponent', () => {
  let component: ContentWelcomeComponent;
  let fixture: ComponentFixture<ContentWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
