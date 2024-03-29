import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "summary",
})
export class PipeSummary implements PipeTransform {
  transform(value: string, limit: number = 50) {
    if (!value) return null;

    return value.substr(0, limit) + "...";
  }
}
