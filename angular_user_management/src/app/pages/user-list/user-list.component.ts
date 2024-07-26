import { Component , inject, OnInit} from '@angular/core';
import { UserService } from '../../service/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  userService = inject(UserService);
  userList: any[]=[];
  
  ngOnInit(): void {
    this.loadUsers()
  }
  
  loadUsers(){
    this.userService.getUsers().subscribe((res:any) => {
      this.userList = res.data;
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if(isDelete){
      this.userService.deleteUserById(id).subscribe((res: any) => {
        if(res.result){
          this.loadUsers()
        } else{
          alert(res.message)
        }
      })
    }
  }
}
