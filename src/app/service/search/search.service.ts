import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// https://api.dictionaryapi.dev/api/v2/entries/en/hello

export interface DictionaryResponse {
  word: string;
  phonetics: Phonetics[] | string;
  meanings: Meangings[];
  license: License;
  sourceUrls: string[];
}

interface Phonetics {
  text: string;
  audio: string;
  sourceUrl: string;
  license: {
    name: string;
    url: string;
  };
}

interface Meangings {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: string[];
    antonyms: string[];
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
