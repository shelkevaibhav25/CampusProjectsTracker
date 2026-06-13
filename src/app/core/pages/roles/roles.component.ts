import { Component } from '@angular/core';
import { IRole } from '../../models/interfaces/role.model';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {


  roleList:IRole [] = [];


}
