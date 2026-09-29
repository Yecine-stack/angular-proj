import { Routes } from '@angular/router';
import { MemberForum } from './member-forum/member-forum';
import { Member } from './member/member';

export const routes: Routes = [
    {
        path:'create',
        component: MemberForum
    },
    {   path:'',
        component:Member
    }
];
