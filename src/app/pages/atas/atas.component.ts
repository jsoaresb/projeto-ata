import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel

@Component({
  selector: 'app-atas',
  standalone: true,
  imports: [RouterModule, FormsModule], // Adiciona FormsModule aqui
  templateUrl: './atas.component.html',
  styleUrls: ['./atas.component.css']
})
export class AtasComponent {
  searchTerm = ''; // Propriedade necessária para ngModel
}
