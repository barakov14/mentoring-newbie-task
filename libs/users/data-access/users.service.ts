import {User} from "../../../../apps/users/src/app/user.interface";
import {map, Observable} from "rxjs";
import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class UsersService {
  private readonly http = inject(HttpClient)
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(users => users as User[]) // Преобразуем данные с использованием оператора map
      );
  }
  constructor() {
    this.getUsers().subscribe(console.log)
  }
}
