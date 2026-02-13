import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from "./layout/header/header.component";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  protected readonly title = signal('client');
  products: any[] = [];
  
  ngOnInit(): void {
      this.http.get<any>(this.baseUrl + 'products').subscribe({
        next: response => this.products = response.data,
        error: (error) => console.error(error),
        complete: () => console.log('Request completed')
      })
  }


}
