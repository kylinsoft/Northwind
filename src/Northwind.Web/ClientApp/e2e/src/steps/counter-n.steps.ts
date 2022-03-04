import { Before, Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";
let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am on the counter-n page", async () => {
  await page.navigateToCounterN();
});

When("I set the value of N to {int}", async (x: number) => {
  element(by.id("increment-n")).sendKeys(x);
});

Then("N should show {string}", async (x: string) => {
  expect(await element(by.id("current-n")).getText()).to.equal(x);
});
