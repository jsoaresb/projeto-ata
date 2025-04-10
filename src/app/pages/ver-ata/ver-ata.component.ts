import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

declare const lucide: any;
declare const html2pdf: any;

@Component({
  selector: 'app-ver-ata',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ver-ata.component.html',
  styleUrls: ['./ver-ata.component.css']
})
export class VerAtaComponent implements AfterViewInit {
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

  showSubButtons = false;

  // 📝 Anotações
  notaTexto: string = '';
  mensagemSalvo: boolean = false;

  constructor() {
    this.carregarNota();
  }

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
      setTimeout(() => lucide.createIcons(), 0);
      const fabContainer = document.querySelector('.fab-container');
      fabContainer?.addEventListener('mouseenter', () => lucide.createIcons());
    }
  }

  salvarNota(): void {
    localStorage.setItem('anotacoesReuniao', this.notaTexto);
    this.mensagemSalvo = true;

    // Oculta a mensagem após 2 segundos
    setTimeout(() => {
      this.mensagemSalvo = false;
    }, 2000);
  }

  carregarNota(): void {
    const notaSalva = localStorage.getItem('anotacoesReuniao');
    if (notaSalva) {
      this.notaTexto = notaSalva;
    }
  }

  imprimirPDF(): void {
    const ataElement = document.querySelector('.ata-container') as HTMLElement;
    const body = document.body;

    if (!ataElement) return;

    // Esconde tudo, exceto a ata
    body.classList.add('pdf-exportando');

    setTimeout(() => {
      html2pdf().from(ataElement).set({
        margin: 10,
        filename: 'ata-reuniao.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      }).save();

      // Após exportar, remove a classe
      setTimeout(() => {
        body.classList.remove('pdf-exportando');
      }, 1000);
    }, 300); // Pequeno delay para garantir que os elementos estejam ocultos
  }
}
