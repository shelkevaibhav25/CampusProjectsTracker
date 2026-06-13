import { Component, inject } from '@angular/core';
import { UserLogin } from '../../models/classes/user.model';
import { UserService } from '../../services/user.service';
import { getSum } from '../../helper/utility';

@Component({
  selector: 'app-logn',
  standalone: true,
  imports: [],
  templateUrl: './logn.component.html',
  styleUrl: './logn.component.css'
})
export class LognComponent {


  userServ = inject(UserService)


  loginObj:UserLogin =  {
    userName:'',
    password:''
  }


  constructor(){
    const getsum = getSum(2,4)
  }


  onLogin(){
    
  }



}
