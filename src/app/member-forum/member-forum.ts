import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberService } from '../../services/member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-forum',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,ReactiveFormsModule,FormsModule],
  templateUrl: './member-forum.html',
  styleUrl: './member-forum.css',
})
export class MemberForum implements OnInit {
//injection de dependence
constructor(private MS:MemberService, private router:Router){}

form !:FormGroup
ngOnInit(){
  this.form=new FormGroup({
  cin: new FormControl(null),
  nom:new FormControl(null),
  })
}
sub()
{///////
  console.log(this.form.value);
  //fleche1
  this.MS.AddMember(this.form.value).subscribe(()=>{
    this.router.navigate([''])
  })
}
}
