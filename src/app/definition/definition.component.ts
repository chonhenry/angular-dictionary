import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DictionaryResponse } from '../service/search/search.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.css',
})
export class DefinitionComponent {
  @Input() definitions!: DictionaryResponse;
}
