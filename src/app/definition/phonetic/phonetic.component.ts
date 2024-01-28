import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DictionaryResponse } from '../../service/search/search.service';

@Component({
  selector: 'app-phonetic',
  templateUrl: './phonetic.component.html',
  styleUrl: './phonetic.component.css',
})
export class PhoneticComponent {
  @Input() definitions!: DictionaryResponse;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  constructor(private toastr: ToastrService) {}

  getPhoneticText(): string {
    const phonetics = this.definitions.phonetics;
    const message = 'phonetic not available';

    if (!phonetics || phonetics.length === 0) {
      return message;
    }

    const phonetic = phonetics.find((p) => p.text && p.text.length > 0);

    if (!phonetic) {
      return message;
    }

    return phonetic.text || message;
  }

  getPhoneticAudio(): string {
    const phonetics = this.definitions.phonetics;

    if (!phonetics || phonetics.length === 0) {
      return '';
    }

    const phonetic = phonetics.find((p) => p.audio && p.audio.length > 0);

    if (!phonetic) {
      return '';
    }

    return phonetic.audio || '';
  }

  onPlayBtnClick(): void {
    if (this.getPhoneticAudio() === '') {
      this.toastr.warning('Sorry, audio is not available for this word.', '', {
        timeOut: 3000,
        easeTime: 200,
      });
      return;
    }
    this.audioPlayer.nativeElement.play();
  }
}
