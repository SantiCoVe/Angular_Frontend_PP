import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueCardsComponent } from './catalogue-cards.component';

describe('CatalogueCardsComponent', () => {
  let component: CatalogueCardsComponent;
  let fixture: ComponentFixture<CatalogueCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogueCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
