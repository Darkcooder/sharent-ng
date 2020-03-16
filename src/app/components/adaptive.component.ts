import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-resizable',
  template: '',
  styleUrls: []
})

export class AdaptiveComponent {

  protected windowSize = new WindowSize();

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.windowSize.update();
  }

}

enum WindowSizeLayout { na, xs, sm, md, lg }
const WindowSizeLayoutStrings = [ 'na', 'xs', 'sm', 'md', 'lg' ];

export class WindowSize {
  width: number;
  height: number;
  layout: WindowSizeLayout;

  private mobileSizes = [WindowSizeLayout.xs, WindowSizeLayout.sm];
  private desktopSizes = [WindowSizeLayout.md, WindowSizeLayout.lg];

  public toString() {
    return WindowSizeLayoutStrings[this.layout];
  }

  public isMobile(): boolean {
    return this.mobileSizes.includes(this.layout);
  }

  public isDesktop(): boolean {
    return this.desktopSizes.includes(this.layout);
  }

  public constructor() {
    this.update();
  }

  public update() {
    this.layout = WindowSizeLayout.na;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (window.innerWidth < 768) {
      this.layout = WindowSizeLayout.xs;
    } else if (window.innerWidth < 992) {
      this.layout = WindowSizeLayout.sm;
    } else if (window.innerWidth < 1200) {
      this.layout = WindowSizeLayout.md;
    } else {
      this.layout = WindowSizeLayout.lg;
    }

  }
}
