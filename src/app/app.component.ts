import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from './api/products.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GastoService } from './gasto/gasto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-baptiste';
  private readonly productsSvc = inject(ProductsService);
  products$ = this.productsSvc.getAllProducts();
  goApi$ = this.productsSvc.getBaptisteGoApi();
}
