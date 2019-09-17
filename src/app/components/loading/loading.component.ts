import { Component, Input } from "@angular/core";

@Component({
  selector: 'loading-component',
  templateUrl: './loading.component.html'
})
export class LoadingComponent {
  public dots = '.';
  @Input() doLoading: boolean;

  constructor() {
    setInterval(() => {
      this.processLoading();
    }, 1000);
  }

  private processLoading() {
    if (this.doLoading){
      if (this.dots.length === 5)
        this.dots = '.';
      else
        this.dots += '.';
    }
  }
}