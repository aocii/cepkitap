import { Injectable } from '@angular/core';
import { kitap } from './kitap.model';

@Injectable({
  providedIn: 'root'
})
export class KitapService {

  private kitaplar: kitap[] = [
    {
      id: '0',
      resim: 'https://cdn.pixabay.com/photo/2014/04/02/14/06/book-306178_960_720.png',
      bilgiler: ['12', '23', '34', '45']
    },
    {
      id: '1',
      resim: 'https://cdn.pixabay.com/photo/2014/04/02/16/30/book-307479_960_720.png',
      bilgiler: ['15', '56', '23', '56']
    },
    {
      id: '2',
      resim: 'https://cdn.pixabay.com/photo/2014/04/02/16/30/book-307512_960_720.png',
      bilgiler: ['45', '22', '312', '78']
    }
  ];

  constructor() { }

  getAllKitaplar() {
    return[...this.kitaplar];
  }
  getKitap(kitapId: string) {
    // tslint:disable-next-line: no-shadowed-variable
    return {...this.kitaplar.find(kitap => {
      return kitap.id === kitapId;
    })};
  }

}
