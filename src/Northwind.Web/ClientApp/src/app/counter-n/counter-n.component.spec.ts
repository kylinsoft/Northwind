import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { CounterNComponent } from "./counter-n.component";

describe("CounterNComponent", () => {
  let component: CounterNComponent;
  let fixture: ComponentFixture<CounterNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterNComponent],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should display a title", async(() => {
    const titleText = fixture.nativeElement.querySelector("h1").textContent;
    expect(titleText).toEqual("Counter N");
  }));

  it("should start with count = 0, and n = 0", async(() => {
    const countElement = fixture.nativeElement.querySelector("#counter");
    const nElement = fixture.nativeElement.querySelector("#current-n");

    expect(countElement.textContent).toEqual("0");
    expect(nElement.textContent).toEqual("0");
  }));

  it("should set n to 5, then increment by 5 when clicked", async(() => {
    const nElement = fixture.nativeElement.querySelector("#current-n");
    const nInput = fixture.nativeElement.querySelector('input');
    const countElement = fixture.nativeElement.querySelector("#counter");
    const incrementButton = fixture.nativeElement.querySelector('button');

    nInput.value = '5';
    nInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    incrementButton.click();
    fixture.detectChanges();

    expect(nElement.textContent).toEqual('5')
    expect(countElement.textContent).toEqual('5');
  }));
});
