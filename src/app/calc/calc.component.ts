import { Component, OnInit } from "@angular/core";
import { resetFakeAsyncZone } from "@angular/core/testing";

@Component({
  selector: "app-calc",
  templateUrl: "./calc.component.html",
  styleUrls: ["./calc.component.scss"],
})
export class CalcComponent implements OnInit {
  constructor() {}

  num1: string = "0";
  num2: string = "0";
  total: string = "0";
  operations: string[] = ["/", "*", "-", "+", "="];
  op: string = "";
  useOp: boolean = false;
  data: string = "0";

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.num1 = "0";
    this.num2 = "0";
    this.total = "0";
    this.op = "";
    this.data = "0";
    this.useOp = false;
  }

  press(key: string): void {
    if (this.operations.indexOf(key) > -1) {
      if (this.useOp === true) {
        if (this.num2 !== "0") {
          this.total = this.result(this.num1, this.num2, this.op);
          this.num1 = this.total;
          this.num2 = "0";
          if (key !== "=") {
            this.data = this.total + key;
          } else {
            this.data = this.total;
            this.useOp = false;
          }
        } else {
          if (key !== "=") {
            this.data = this.data.slice(0, -1) + key;
          } else {
            this.data = this.data.slice(0, -1);
            this.useOp = false;
          }
        }
      } else {
        if (key !== "=") {
          this.data += key;
          this.useOp = true;
        }
      }
      this.op = key;
    } else {
      if (this.useOp === true) {
        if (this.num2 !== "0") {
          this.num2 += key;
          this.data += key;
        } else {
          if (key !== ".") {
            this.num2 = this.num2.slice(0, -1) + key;
          } else {
            this.num2 += key;
          }
          this.data += this.num2;
        }
      } else {
        if (this.num1 !== "0") {
          this.num1 += key;
          this.data += key;
        } else {
          if (key !== ".") {
            this.num1 = this.num1.slice(0, -1) + key;
          } else {
            this.num1 += key;
          }
          this.data = this.num1;
        }
      }
    }
  }

  sum = (n1: number, n2: number): number => n1 + n2;

  subtraction = (n1: number, n2: number): number => n1 - n2;

  multiplication = (n1: number, n2: number): number => n1 * n2;

  division = (n1: number, n2: number): number => n1 / n2;

  precision = (n: number): string =>
    Number.parseFloat(n.toString()).toPrecision();

  result(n1: string, n2: string, op: string): string {
    switch (op) {
      case "+":
        this.total = this.precision(this.sum(parseFloat(n1), parseFloat(n2)));
        break;
      case "-":
        this.total = this.precision(
          this.subtraction(parseFloat(n1), parseFloat(n2))
        );
        break;
      case "*":
        this.total = this.precision(
          this.multiplication(parseFloat(n1), parseFloat(n2))
        );
        break;
      case "/":
        this.total = this.precision(
          this.division(parseFloat(n1), parseFloat(n2))
        );
        break;
    }
    return this.total;
  }
}
