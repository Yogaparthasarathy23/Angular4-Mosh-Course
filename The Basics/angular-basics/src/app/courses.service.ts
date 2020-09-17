import { importExpr } from "@angular/compiler/src/output/output_ast";

export interface ICourseService {
  getCourses();
}
export class CourseService {
  getCourses() {
    return ["course1", "course2", "course3"];
  }
}
