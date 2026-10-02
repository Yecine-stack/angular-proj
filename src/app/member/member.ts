import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

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

  constructor(private MS: MemberService) {}

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
    this.MS.deleteMember(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}