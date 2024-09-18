import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GastoService {
  private readonly _http = inject(HttpClient);

  createGasto(gasto: any): Observable<any> {
    console.log(`hola mira el gasto: ${gasto}`);

    // Transformar el objeto gasto en un JSON antes de enviarlo
    const body = JSON.stringify(gasto);
    console.log(`hola mira el gasto: ${body}`);
    // Definir headers para indicar que el contenido es JSON
    const headers = { 'Content-Type': 'application/json' };

    return this._http.post('http://localhost:5050/gastos', body, { headers });
  }
}
