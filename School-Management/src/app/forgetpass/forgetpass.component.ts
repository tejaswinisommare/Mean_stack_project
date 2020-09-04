import { Component, OnInit } from '@angular/core';
import { faAddressCard, faLock, faSchool } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Validators } from '@angular/forms';



@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  public faSchool = faSchool;
  public faAddressCard = faAddressCard;
  public faLock = faLock;
  public faFacebook = faFacebook;
  public faTwitter = faTwitter;
  public faGoogle = faGoogle;
  public faLinkedinIn = faLinkedinIn;


  constructor(

  ) { }

  ngOnInit(): void { }

};
