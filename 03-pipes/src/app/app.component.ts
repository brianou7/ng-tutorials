import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Brian";
  name2 = "brahian alexis ocAMpo uribe";

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salary = 1234.5;

  heroe = {
    name: "Logan",
    key: "Wolverine",
    age: 500,
    address: {
      street: "First",
      house: 19
    }
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data arrived!"), 3500);
  });

  date = new Date();

  video = 'OiJJSY5uBvQ';

  active = true;
}
