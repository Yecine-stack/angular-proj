import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberForum } from './member-forum';

describe('MemberForum', () => {
  let component: MemberForum;
  let fixture: ComponentFixture<MemberForum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberForum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberForum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
