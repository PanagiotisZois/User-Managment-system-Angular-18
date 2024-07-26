import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  
  userService = inject(UserService);
  loggedUserId: number = 0;

  userObj: any = {
    "UserId": 0,
    "FullName": "",
    "EmailId": "",
    "MobileNo": "",
    "AdressLine1": "",
    "AdressLine2": "",
    "City": "",
    "ProfilePicUrl": "",
    "Password": "",
    "Role": "",

  }

  constructor(){
    const loggedUser = localStorage.getItem('userApp');
    if(loggedUser){
      const parseData = JSON.parse(loggedUser);
      if(parseData.role="User"){
        this.loggedUserId = parseData.userId;
        this.getUserById()
      }
    }
  }

  getUserById(){
    this.userService.getUserById(this.loggedUserId).subscribe((res:any) =>{ 
      this.userObj = res.data
    })
  }

  onSave() {
    this.userService.createNewUser(this.userObj).subscribe((res:any) => {
      if(res.result){
        alert("User Created!")
      }
      else{
        alert(res.message)
      }
    })
  }

  onUpdate() {
    this.userService.createNewUser(this.userObj).subscribe((res:any) => {
      if(res.result){
        alert("User Update success!")
      }
      else{
        alert(res.message)
      }
    })
  }

}
