import { Component, Input } from '@angular/core';
import { Meaning } from '../../service/search/search.service';

@Component({
  selector: 'app-meanings',
  templateUrl: './meanings.component.html',
  styleUrl: './meanings.component.css',
})
export class MeaningsComponent {
  @Input() meanings!: Meaning[];
}
