import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }
  socialMediaLinks = {

    github: "https://github.com/santigo055",
    linkedin: "https://www.linkedin.com/in/santiago-gonzalez-953997b0/",
    gmail: "santigonzalez05@gmail.com",
  };
  ngOnInit(): void {
  }

}
