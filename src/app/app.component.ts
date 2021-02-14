import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public data: object = [
    {
      id: 12345,
      taskName: "One",
      taskEstimate: 5,
      taskToDo: 5
    },
    {
      id: 22345,
      taskName: "Two",
      taskEstimate: 5,
      taskToDo: 5
    }
  ];
}
