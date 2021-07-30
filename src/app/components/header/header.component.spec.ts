import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component: "HeaderComponent"', () => {
    expect(component).toBeTruthy();
  });

  it('should contain header "poc using angular"',()=>{
    fixture.detectChanges();
    const compile = fixture.nativeElement as HTMLElement;
    const h2 = compile.querySelector("h2");
    expect(h2?.textContent).toContain("poc using angular");
  })
});
