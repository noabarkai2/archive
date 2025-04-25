import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHerumToolTip]'
})
export class HerumToolTipDirective {

  @Input() tooltipText: string = '';

  private tooltip: HTMLElement;

  constructor(private el: ElementRef) {
    this.tooltip = document.createElement('div');
    this.tooltip.className = 'tooltip';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    const hostPosition = this.el.nativeElement.getBoundingClientRect();
    const tooltipPosition = {
      top: window.scrollY + hostPosition.top - this.tooltip.offsetHeight - 30,
      left: window.scrollX + hostPosition.left + hostPosition.width / 4 //+ this.tooltip.offsetWidth
    };

    const bodyRect = document.body.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();

    if (tooltipPosition.left < bodyRect.left) {
      tooltipPosition.left = bodyRect.left;
    } else if (tooltipPosition.left + tooltipRect.width > bodyRect.right) {
      tooltipPosition.left = bodyRect.right - tooltipRect.width;
    }

    this.tooltip.style.top = `${tooltipPosition.top}px`;
    this.tooltip.style.left = `${tooltipPosition.left}px`;
    document.body.appendChild(this.tooltip);
    this.tooltip.innerText = this.tooltipText;
  }

  private hideTooltip() {
    document.body.removeChild(this.tooltip);
  }

}