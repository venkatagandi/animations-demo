import { Component, Input } from "@angular/core";
import { expandcollapse } from "./zippy.component.animations";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"],
  animations: [expandcollapse]
})
export class ZippyComponent {
  @Input("title") title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
