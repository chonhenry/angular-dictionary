import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DictionaryResponse {
  word: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface Phonetics {
  text?: string;
  audio: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
}

export interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
  synonyms: string[];
  antonyms: string[];
}

interface License {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(word: string): Observable<DictionaryResponse[]> {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
    return this.http.get<DictionaryResponse[]>(url);
  }
}
