import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string ="http://localhost:8989/authenticate"
  constructor(private httpClient:HttpClient) { }

  authenticate(jwtObj: any) {

    return this.httpClient.post<any>(this.url,jwtObj).pipe(
    
    map(
    
    userData => {
    
    sessionStorage.setItem('username',jwtObj.username);
    
    let tokenStr = 'Bearer ' + userData.token;
    
    sessionStorage.setItem('token',tokenStr);
    
    return userData;
    
    }
    
    )
    
    );
    
    }
}
