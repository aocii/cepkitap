import { Injectable } from '@angular/core';
import { CONSTANTS } from './constants';
import { Version, User, Question } from './entities';
import { Md5 } from 'ts-md5';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Book } from '../../../../quiz-admin/src/app/entity/book';

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  booksUrl = CONSTANTS.server + '/services/book/active';
  questionUrl = CONSTANTS.server + '/services/question/categoryMobile/';
  userUrl = CONSTANTS.server + '/services/user';
  facebookUrl = this.userUrl + '/fb';
  loginUrl = CONSTANTS.server + '/oauth/token';
  logoutUrl = CONSTANTS.server + '/oauth/logout';
  statusUrl = CONSTANTS.server + '/services/status';
  accessToken: string;
  loggedInUser: User;
  headers: HttpHeaders;
  userChangeVar = new Subject();

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider CONSTANTS.server: ' + CONSTANTS.server);
  }

  checkServerStatus() {
    console.log('data service - checkServerStatus');
    const promise = new Promise(
      (resolve, reject) => {
        this.http.get(this.statusUrl).subscribe(
          (res: Version) => {
            console.log(JSON.stringify(res));
            resolve(res);
          },
          error => {
            reject(error);
          }
        );
      }
    );
    return promise;
  }

  getBooks(): Promise<Book[]> {
    const promise = new Promise<Book[]>(
      (resolve, reject) => {
        this.http.get(this.booksUrl).subscribe(
          (res: any) => {
            console.log('data service - getBooks: ' + JSON.stringify(res));
            resolve(res as Book[]);
          },
          error => {
            reject(error);
          }
        );
      }
    );
    return promise;
  }
  getQuestions(categoryId: number): Promise<Question[]> {
    console.log('data service - get questions by category id: ' + categoryId);
    const promise = new Promise<Question[]>(
      (resolve, reject) => {
        this.http.get(this.questionUrl + categoryId).subscribe(
          (res: any) => {
            console.log('data service - questions http request successfull.');
            resolve(res as Question[]);
          },
          error => {
            reject(error);
          }
        );
      }
    );
    return promise;
  }
  createHeader() {
    this.headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + this.accessToken
    });
  }
  notifyUserChange() {
    this.userChangeVar.next(new Date());
  }
  getUser() {
    const promise = new Promise(
      (resolve, reject) => {
        if (typeof this.loggedInUser === 'undefined' || this.loggedInUser === null) {
          this.http.get(this.userUrl, { headers: this.headers }).subscribe(
            (res: any) => {
              console.log('Logging user', res);
              this.loggedInUser = res;
              resolve(res);
            },
            error => {
              reject(error);
            }
          );
        } else {
          resolve(this.loggedInUser);
        }
      }
    );
    return promise;
  }
  validateUser(email, pass, isEncrypted = false) {
    let passwordStr = '';
    if (!isEncrypted) {
      const md5 = new Md5();
      md5.appendStr(pass);
      passwordStr = md5.end().toString().toUpperCase();
    } else {
      passwordStr = pass.toString().toUpperCase();
    }
    console.log(isEncrypted + ' PASS:' + pass + ' Encoded:' + passwordStr);
    const encoded = btoa(CONSTANTS.clientId + ':' + CONSTANTS.secret);
    const basicHeader = 'Basic ' + encoded;

    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: basicHeader
    });
    const params = new URLSearchParams();

    params.set('grant_type', 'password');
    params.set('client_id', CONSTANTS.clientId);
    params.set('client_secret', CONSTANTS.secret);
    params.set('username', email);
    params.set('password', passwordStr);

    const promise = new Promise(
      (resolve, reject) => {
        this.http.post(this.loginUrl, params.toString(), { headers, params: new HttpParams() }).subscribe(
          (res: any) => {
            console.log(res.access_token);
            this.accessToken = res.access_token;
            this.createHeader();
            resolve(res);
          },
          error => {
            console.log('User is not authenticated.', error);
            reject(error);
          }
        );
      }
    );
    return promise;
  }
  logout() {
    this.loggedInUser = null;
    const basicHeader = 'Bearer ' + this.accessToken;
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: basicHeader
    });
    const params = new URLSearchParams();

    this.accessToken = '';
    this.http.post(this.logoutUrl, params.toString(), { headers }).subscribe(
      (res: any) => {
        console.log('LOGOUT RES', res);
      },
      error => {
        console.log('User is not LOGOUT.', error);
      }
    );
  }

}
