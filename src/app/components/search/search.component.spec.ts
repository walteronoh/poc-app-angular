import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component: "SearchComponent', () => {
    expect(component).toBeTruthy();
  });

  it("should contain a header with 'Search Patient'",()=>{
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h4 = compiled.querySelector('h4');
    expect(h4?.textContent).toContain("Search Patient");
  });

  it("should contain a label 'Search'",()=>{
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const label = compiled.querySelector('label');
    expect(label?.textContent).toContain("Search");
  });

  it("should contain a Search Input",()=>{
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLInputElement;
    const input = compiled.querySelector('input');
    expect(input?.type).toBe("text");
    expect(input?.placeholder).toBe("Search..");
  });
});
