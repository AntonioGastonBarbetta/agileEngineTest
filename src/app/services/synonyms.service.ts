import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Synonym } from '../interfaces/synonyms.interface';

@Injectable({
  providedIn: 'root'
})
export class SynonymsService {

  constructor(private http: HttpClient) { }

  getSynonyms(word: string) {
    return this.http.get<Synonym[]>(`https://api.datamuse.com/words?ml=${word}`);
  }
}
