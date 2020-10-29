import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { CalcComponent } from "./calc.component";
import { DebugElement } from "@angular/core";

describe("CalcComponent", () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;
  let buttonElement1: DebugElement;
  let buttonElement2: DebugElement;
  let buttonSumElement: DebugElement;
  let buttonSubtractionElement: DebugElement;
  let buttonMultiplicationElement: DebugElement;
  let buttonDivisionElement: DebugElement;
  let buttonDotElement: DebugElement;
  let buttonTotalElement: DebugElement;
  let inputElement: DebugElement;
  const TIMEOUT = 1000;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    buttonElement1 = fixture.debugElement.query(By.css("#button1"));
    buttonElement2 = fixture.debugElement.query(By.css("#button2"));
    buttonSumElement = fixture.debugElement.query(By.css("#sum"));
    buttonSubtractionElement = fixture.debugElement.query(
      By.css("#subtraction")
    );
    buttonMultiplicationElement = fixture.debugElement.query(
      By.css("#multiplication")
    );
    buttonDivisionElement = fixture.debugElement.query(By.css("#division"));
    buttonDotElement = fixture.debugElement.query(By.css("#dot"));
    buttonTotalElement = fixture.debugElement.query(By.css("#total"));
    inputElement = fixture.debugElement.query(By.css("#data"));
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should click button1", async(() => {
    buttonElement1.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(buttonElement1.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should click button1 and operation and button2", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonSumElement.triggerEventHandler("click", null);
    buttonElement2.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(buttonElement1.nativeElement.value);
        expect(component.op).toBe(buttonSumElement.nativeElement.value);
        expect(component.num2).toBe(buttonElement2.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should click button1 and dot", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonDotElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(
          buttonElement1.nativeElement.value +
            buttonDotElement.nativeElement.value
        );
      }, TIMEOUT);
    });
  }));

  it("should click button1 and operation and button2 and dot: 1+2.", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonSumElement.triggerEventHandler("click", null);
    buttonElement2.triggerEventHandler("click", null);
    buttonDotElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(buttonElement1.nativeElement.value);
        expect(component.op).toBe(buttonSumElement.nativeElement.value);
        expect(component.num2).toBe(
          buttonElement2.nativeElement.value +
            buttonDotElement.nativeElement.value
        );
      }, TIMEOUT);
    });
  }));

  it("should click dot: click(.) --> result(0.)", async(() => {
    buttonDotElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe("0" + buttonDotElement.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should click button1 and operation and dot: 1+0.", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonSumElement.triggerEventHandler("click", null);
    buttonDotElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(buttonElement1.nativeElement.value);
        expect(component.op).toBe(buttonSumElement.nativeElement.value);
        expect(component.num2).toBe("0" + buttonDotElement.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should sum and show result", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonSumElement.triggerEventHandler("click", null);
    buttonElement2.triggerEventHandler("click", null);
    buttonTotalElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(component.data);
        expect(component.num2).toBe("0");
        expect(component.op).toBe(buttonTotalElement.nativeElement.value);
        expect(component.data).toBe(component.total);
        expect(component.total).toBe(inputElement.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should subtraction and show result", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonSubtractionElement.triggerEventHandler("click", null);
    buttonElement2.triggerEventHandler("click", null);
    buttonTotalElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(component.data);
        expect(component.num2).toBe("0");
        expect(component.op).toBe(buttonTotalElement.nativeElement.value);
        expect(component.data).toBe(component.total);
        expect(component.total).toBe(inputElement.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should multiplication and show result", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonMultiplicationElement.triggerEventHandler("click", null);
    buttonElement2.triggerEventHandler("click", null);
    buttonTotalElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(component.data);
        expect(component.num2).toBe("0");
        expect(component.op).toBe(buttonTotalElement.nativeElement.value);
        expect(component.data).toBe(component.total);
        expect(component.total).toBe(inputElement.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should division and show result", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonDivisionElement.triggerEventHandler("click", null);
    buttonElement2.triggerEventHandler("click", null);
    buttonTotalElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(component.data);
        expect(component.num2).toBe("0");
        expect(component.op).toBe(buttonTotalElement.nativeElement.value);
        expect(component.data).toBe(component.total);
        expect(component.total).toBe(inputElement.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should sum and show result with operation: click(1+2-) --> result(3-)", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonSumElement.triggerEventHandler("click", null);
    buttonElement2.triggerEventHandler("click", null);
    buttonSubtractionElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(component.total);
        expect(component.num2).toBe("0");
        expect(component.op).toBe(buttonSubtractionElement.nativeElement.value);
        expect(component.data).toBe(inputElement.nativeElement.value);
      }, TIMEOUT);
    });
  }));

  it("should show num1 and last operation clicked: click(1+-) --> result(1-)", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonSumElement.triggerEventHandler("click", null);
    buttonSubtractionElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(buttonElement1.nativeElement.value);
        expect(component.num2).toBe("0");
        expect(component.op).toBe(buttonSubtractionElement.nativeElement.value);
        expect(component.data).toBe("1-");
      }, TIMEOUT);
    });
  }));

  it("should show num1 because the last operation clicked is equal: click(1+=) --> result(1)", async(() => {
    buttonElement1.triggerEventHandler("click", null);
    buttonSumElement.triggerEventHandler("click", null);
    buttonTotalElement.triggerEventHandler("click", null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.num1).toBe(buttonElement1.nativeElement.value);
        expect(component.num2).toBe("0");
        expect(component.op).toBe(buttonTotalElement.nativeElement.value);
        expect(component.data).toBe("1");
      }, TIMEOUT);
    });
  }));
});
