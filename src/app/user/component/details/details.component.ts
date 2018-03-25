import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {UserInterface} from '../../model/user.interface';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() user: UserInterface;
  @ViewChild('modal') modal;
  openModal: boolean;
  url: string;
  likes: number;
  followers: number;

  constructor() {
  }

  ngOnInit() {
    this.likes = this.user.likes;
    this.followers = this.user.followers;
    this.url = window.location.href;
  }

  addLike() {
    this.likes++;
  }

  addFollower() {
    this.followers++;
  }

  onClickedOutside(e: Event) {
    if (this.modal.nativeElement === e.target) {
      this.openModal = false;
    }
  }
}
