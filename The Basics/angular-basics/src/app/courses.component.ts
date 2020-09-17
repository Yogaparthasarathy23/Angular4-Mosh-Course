import { Component } from "@angular/core";

import { CourseService } from "./courses.service";

@Component({
  selector: "app-courses",
  template: `
    <div>
      <!-- String Interpolation -->
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
      </ul>
    </div>
    <!-- Property Binding -->
    <img [src]="imgUrl" />

    <!-- 
         Attribute Binding 
         colspan is the attribute of HTML and it doesnt exist in DOM element property. Hence, we need to tell angular that this is the attribute by appending "attr."
    -->
    <table>
      <td [attr.colspan]="2"></td>
    </table>

    <!-- class binding 
       active class applies only if isActive variable is true
    -->
    <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> -->

    <!-- Style binding -->
    <!-- <input [style.backgroundColor]="backgroundColor" /> -->

    <!-- Event Binding and Event Bubbling cancellation-->
    <!-- <div (keyup)="eventBubbling()">
      <input (keyup)="keyUpHandler($event)" />
    </div> -->

    <!-- Event Filtering  -  This filters enter key up only from the keyup event-->
    <!--  <input (keyup.enter)="keyUpHandler($event)" /> -->

    <!-- Template Reference -->
    <!-- <input #email (keyup.enter)="keyUpHandler(email.value)" /> -->

    <!--  2 way Binding -->
    <input [(ngModel)]="email" (keyup.enter)="keyUpHandler()" />

    <!-- inbuilt pipe option -->
    <div>
      {{ course.name | uppercase | lowercase }} <br />
      {{ course.student | number }} <br />
      {{ course.rating | number: "2.3-4" }} <br />
      {{ course.price | currency: "USD":true:"2.1-1" }} <br />
      {{ course.enrollDate | date: "shortDate" }}
      <div></div>
    </div>

    <!--  custom pipe -->

    <div></div>
    {{ text | summary }}
  `,
})
export class CoursesComponent {
  title = "Courses";
  courses: string[];
  isActive = false;
  backgroundColor = this.isActive ? "red" : "blue";
  imgUrl = "https://picsum.photos/200/300";
  email;

  course = {
    name: "Angular 4",
    student: 25652,
    rating: 4.95,
    price: 25,
    enrollDate: Date.now(),
  };

  text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
  keyUpHandler() {
    // e.stopPropagation(); // This used to avoid event bubbling, This part of normal DOM Event
    //console.log(e.target.value);
    console.log(this.email);
  }

  // eventBubbling() {
  //   console.log("eventBubbling");
  // }
}
