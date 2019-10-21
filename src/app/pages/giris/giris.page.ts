import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-giris',
  templateUrl: './giris.page.html',
  styleUrls: ['./giris.page.scss'],
})
export class GirisPage implements OnInit {
  public onLoginForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private dataService: QuizService) { }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      phone: [null, Validators.compose([
        Validators.required
      ])],
      password: [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  checkCredentials() {
    console.log(this.onLoginForm.value);
    this.dataService.validateUser(this.onLoginForm.value.phone, this.onLoginForm.value.password)
      .then(async res => {
        const toast = await this.toastCtrl.create({
          showCloseButton: true,
          message: 'Giriş Başarılı.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.navCtrl.navigateRoot('/home');
      })
      .catch(async err => {
        const toast = await this.toastCtrl.create({
          showCloseButton: true,
          message: 'Giriş Başarısız.' + JSON.stringify(err),
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      });
  }

}
