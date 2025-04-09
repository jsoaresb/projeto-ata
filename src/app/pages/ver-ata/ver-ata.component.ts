import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE

@Component({
  selector: 'app-ver-ata',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // 👈 ADICIONE RouterModule
  templateUrl: './ver-ata.component.html',
  styleUrls: ['./ver-ata.component.css']
})
export class VerAtaComponent {
  ata = {
    boasVindas: '',
    presididaPor: '',
    dirigidaPor: '',
    anuncios: '',
    primeiroHino: '',
    primeiraOracao: '',
    primeiroOrador: '',
    hinoIntermediario: '',
    ultimoOrador: '',
    ultimaOracao: ''
  };
}
