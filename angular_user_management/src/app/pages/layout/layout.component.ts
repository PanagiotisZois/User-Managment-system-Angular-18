import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router);

  onLogOff() {
    localStorage.removeItem("userApp");
    this.router.navigateByUrl('/login');
  }

}
