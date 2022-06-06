import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentServicesComponent } from './content-services.component';

describe('ContentServicesComponent', () => {
  let component: ContentServicesComponent;
  let fixture: ComponentFixture<ContentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
