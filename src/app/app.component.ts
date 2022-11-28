import { Component, OnInit } from '@angular/core';
import NotificationService, { NotificationTitle, NotificationType } from './services/admin/notification.service';
import { AuthService } from './services/common/auth.service';
import { HttpClientService } from './services/common/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'UasTestClient';

  constructor(private authService:AuthService, private notificationService:NotificationService){}
  ngOnInit(): void {
    
  }

  login(){
    this.authService.login({userNameOrEmail:"omerfds", password:"omerfds"}).subscribe(response=>{
      localStorage.setItem("accessToken",response.token.token)
      localStorage.setItem("refreshToken",response.token.refreshToken.token)
      this.notificationService.notify("Giriş işlemi başarılı",{
        notificationTitle:NotificationTitle.Success,
        notificationType:NotificationType.Success
      })
    })
  }
}
