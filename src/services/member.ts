import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberModel } from '../models/MemberModel';

// le decorateur @injectable signifie que le service
//accepte etre injecté (appelé) dans les composants
//ou dans les autres services

@Injectable({
  providedIn: 'root', //sur toute la route de projet
})
export class MemberService {
  constructor(private http:HttpClient){}
  // génerer les requetes http pour 
  // consommer les API du  backend

  getALLMembers()
  {

    return this.http.get<MemberModel[]>('http://localhost:3000/members')
  }
  AddMember(m:MemberModel)
  {
    return this.http.post<void>('http://localhost:3000/members',m);
  }
  deleteMember(id:String)
  {
    return this.http.delete<void>(`http://localhost:3000/members/${id}`);
  }
}
