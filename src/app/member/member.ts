import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit {

  constructor(private MS: MemberService,private dialog:MatDialog) {}

  displayedColumns: string[] = ["id", "cin", "nom", "icon"];
  dataSource: any[] = [];

  ngOnInit() {
    this.MS.getALLMembers().subscribe((response) => {
      this.dataSource = response;
    });
  }

  testButton() {
    console.log("Button clicked!");
  }

  deleteMember(id: string) {
    //ouvrir la boite(dialog)
    let dialogRef = this.dialog.open(ConfirmDialog); //==> lancement de thread observable
    //attendre le click
    dialogRef.afterClosed().subscribe((v)=>{   //subscribes until dialog is closed, stores result in v
      if(v){//v is boolean , means delete is dialog was clicked
        this.MS.deleteMember(id).subscribe(() => {   //deletes
          this.ngOnInit();
    });
      }
    })
  }


  
}