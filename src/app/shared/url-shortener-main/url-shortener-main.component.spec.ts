import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortenerMainComponent } from './url-shortener-main.component';

describe('UrlShortenerMainComponent', () => {
  let component: UrlShortenerMainComponent;
  let fixture: ComponentFixture<UrlShortenerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlShortenerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlShortenerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
