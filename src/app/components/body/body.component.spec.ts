import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component: "BodyComponent"', () => {
    expect(component).toBeTruthy();
  });

  it("should contain a link with 'Search'",()=>{
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const a = compiled.querySelector('a.search-link');
    expect(a?.textContent).toContain("Search");
  });

  it("should contain a link with 'Report'",()=>{
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const a = compiled.querySelector('a.report-link');
    expect(a?.textContent).toContain("Reports");
  });
});
