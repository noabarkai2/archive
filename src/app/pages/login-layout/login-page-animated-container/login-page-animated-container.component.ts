import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'login-page-animated-container',
  templateUrl: './login-page-animated-container.component.html',
  styleUrls: ['./login-page-animated-container.component.scss']
})
export class LoginPageAnimatedContainerComponent implements OnInit {

  @ViewChild('avatarContainer', { static: true }) avatarContainerRef!: ElementRef;

  ngOnInit(): void {
    const avatarContainer = this.avatarContainerRef.nativeElement as HTMLElement;
    const units = avatarContainer.querySelectorAll('.unit') as NodeListOf<HTMLElement>;
    let mouseX = 0, mouseY = 0;
    let isMoving = false;
  
    const moveUnits = () => {
      const moveX = (mouseX - window.innerWidth / 2) / window.innerWidth * 10;
      const moveY = (mouseY - window.innerHeight / 2) / window.innerHeight * 10;
  
      units.forEach(unit => {
        const depth = parseFloat(unit.dataset['depth'] || '1') || 1;
        unit.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
  
      if (isMoving) {
        requestAnimationFrame(moveUnits);
      }
    };
  
    window.addEventListener('mousemove', (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(moveUnits);
      }
    });
  
    avatarContainer.addEventListener('mouseleave', () => {
      isMoving = false;
      units.forEach(unit => {
        unit.style.transform = `translate(0, 0)`;
      });
    });
  }
}