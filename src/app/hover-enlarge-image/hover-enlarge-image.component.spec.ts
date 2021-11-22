import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverEnlargeImageComponent } from './hover-enlarge-image.component';

describe('HoverEnlargeImageComponent', () => {
  let component: HoverEnlargeImageComponent;
  let fixture: ComponentFixture<HoverEnlargeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverEnlargeImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverEnlargeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
