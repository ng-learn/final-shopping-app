import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output('featuredSelected') navigate: EventEmitter<string> = new EventEmitter();
  onNavigate(location: string) {
    this.navigate.emit(location);
  }
}
