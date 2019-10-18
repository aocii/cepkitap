import { Injectable } from '@angular/core';
import { kitap } from './kitap.model';

@Injectable({
  providedIn: 'root'
})
export class KitapService {

  private kitaplar: kitap[] = [
    {
      id: '0',
      resim: 'https://www.okuoku.com/Content/global/images/products/5/560839/big-kucuk-prens.jpg',
      bilgiler: ['12', '23', '34', '45'],
      isim: 'Küçük Prens',
      aciklama: '"Hoşça git," dedi tilki. "Vereceğim sır çok basit: İnsan ancak yüreğiyle baktığı zaman doğruyu görebilir. Gerçeğin mayası gözle görülmez." Küçük Prens unutmamak için tekrarladı: "Gerçeğin mayası gözle görülmez."'
    },
    {
      id: '1',
      resim: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000064031-1.jpg',
      bilgiler: ['15', '56', '23', '56'],
      isim: 'Şeker Portakalı',
      aciklama: 'Yazarlıkta karar kılıncaya kadar, boks antrenörlüğünden ressam ve heykeltıraşlara modellik yapmaya, muz plantasyonlarında hamallıktan gece kulüplerinde garsonluğa kadar çeşitli işlerde çalışan Jose Mauro de Vasconcelosun başyapıtı Şeker Portakalı, "günün birinde acıyı keşfeden küçük bir çocuğun öyküsü"dür. Çok yoksul bir ailenin oğlu olarak dünyaya gelen, dokuz yaşında yüzme öğrenirken bir gün yüzme şampiyonu olmanın hayalini kuran Vasconcelosun çocukluğundan derin izler taşıyan Şeker Portakalı, yaşamın beklenmedik değişimleri karşısında büyük sarsıntılar yaşayan küçük Zezenin başından geçenleri anlatır. Vasconcelos, tam on iki günde yazdığı bu romanı "yirmi yıldan fazla bir zaman yüreğinde taşıdığını" söyler.Aydın Emeçin, güzel Türkçesiyle dilimize armağan ettiği Şeker Portakalı nın başkahramanı Zeze nin büyüdükçe yaşadığı serüvenleri, yazarın Güneşi Uyandıralım ve Delifişek adlı romanlarında izleyebilirsiniz.'

    },
    {
      id: '2',
      resim: 'https://i.dr.com.tr/cache/500x400-0/originals/0001788928001-1.jpg',
      bilgiler: ['45', '22', '312', '78'],
      isim: 'Güneşi Uyandıralım',
      aciklama: 'Şeker Portakalının sevimli, küçük kahramanı Zeze işte yine karşınızda. Gözlerinin içi yine ışıl ışıl, yüreği yine sevgi dolu. Ama hüzünleri , biraz daha büyümüş bir çocuğun hüzünleri. Küçüklüğündeki küçük Şeker Portakalı yok, ama bu kez de yüreğinde sevgili kurbağası var. '

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
