import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameInterface } from '../interfaces/game-interface';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://starlord.hackerearth.com/gamesext";
  getAllGames():Observable<GameInterface[]>{
    return this.http.get<GameInterface[]>(this.baseUrl);
  }
}
