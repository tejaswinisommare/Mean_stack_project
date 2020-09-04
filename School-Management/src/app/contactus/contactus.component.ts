import { Component, OnInit } from '@angular/core';
import { } from '@angular/forms';
import { } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPhone, faEnvelope, faClock, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public faHome = faHome;
  public faPhone = faPhone;
  public faEnvelope = faEnvelope;
  public faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
