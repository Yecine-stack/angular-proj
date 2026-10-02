import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberService } from '../../services/member';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-forum',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,ReactiveFormsModule,FormsModule],
  templateUrl: './member-forum.html',
  styleUrl: './member-forum.css',
})
export class MemberForum implements OnInit {
//injection de dependence
constructor(private MS:MemberService, private router:Router,private activatedRoute: ActivatedRoute){}

form !:FormGroup; idCourant!:String;
ngOnInit(){
  //recuperer la route active(ya3ni composent mn ana route tsna3)
  this.idCourant=this.activatedRoute.snapshot.params['id'];
  //si id existe dans route =>getMemberByID
  if(this.idCourant){
    this.MS.getMemberByID(this.idCourant).subscribe((x)=>{
  this.form=new FormGroup({
  cin: new FormControl(x.cin),
  nom: new FormControl(x.nom),
  })
    })  //x est un memberModel

  }
  else{
//sinon la route active est create
  this.form=new FormGroup({
  cin: new FormControl(null),
  nom:new FormControl(null),
  })
  }
  
}
sub()
{ console.log(this.form.value);
  if (this.idCourant){
this.MS.UpdateMember(this.idCourant,this.form.value).subscribe(()=>{
this.router.navigate([''])
  })
  }
  else{
this.MS.AddMember(this.form.value).subscribe(()=>{
this.router.navigate([''])
  })
}
}
}
