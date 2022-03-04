import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter-n",
  templateUrl: "./counter-n.component.html",
  styleUrls: ["./counter-n.component.css"],
})
export class CounterNComponent implements OnInit {
  public currentCount: number = 0;
  public incrementN: number = 0;

  constructor() {}

  ngOnInit() {}

  public incrementCounter() {
    this.currentCount = this.currentCount + this.incrementN;
  }
}
