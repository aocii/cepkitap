import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private dataService: QuizService) { }
  ngOnInit(): void {
    console.log('Onur aşağıda örnekleri bulabilirsin. Bu istekler asenkron çalışır unutma ;) ');
    this.dataService.getBooks()
      // Başarılı ise aşağıdaki then çalışır
      .then(books => {// res Book[] arrayi
        console.log('Books', books);
        for (const book of books) {
          console.log('-----Kitabın adı ' + book.qText + '-----');
          if (book.categories.length > 0) {// Categorisi olan bir kitapları bulup o kategorilerin sorularını çekelim.
            for (const category of book.categories) {// Kitabın her bir kategorisinin sorularını çekelim
              this.getQuestionOfCategory(category.id); // category id ile sorualrı çekeceğiz
            }
          } else {
            console.log('Upps evet bazı kitapların categorileri olmayabilir');
          }
        }
      })
      // Başarısız ise aşağıdaki then çalışır
      .catch(err => { // Hata genelde json olarak gelir handle edilmelidir
        console.log('Books err', err);
      });

    console.log('kod asenkron işlerin bitmesini beklemez direk burayı basar.');
  }
  getQuestionOfCategory(categoryId: number) {
    this.dataService.getQuestions(categoryId)
      .then(questions => {// Sorular geldi ekrana bastıralım
        console.log('Category idsi ' + categoryId + ' olan sorular: ', questions);
      })
      .catch(err => { // Hata genelde json olarak gelir handle edilmelidir
        console.log('CategoryQuestions err', err);
      });
  }
}
