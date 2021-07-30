import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component: "ReportComponent"', () => {
    expect(component).toBeTruthy();
  });

  it("should contain header 'Generate Report'",()=>{
    const compiled = fixture.nativeElement as HTMLElement;
    const h4 = compiled.querySelector('h4');
    expect(h4?.textContent).toContain("Generate Report");
  });
});
