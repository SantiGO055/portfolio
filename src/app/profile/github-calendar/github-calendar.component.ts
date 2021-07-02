import { Component, OnInit } from '@angular/core';
declare var GitHubCalendar: (arg0: string, arg1: string, arg2: { responsive: boolean; tooltips: boolean; }) => void;
@Component({
  selector: 'app-github-calendar',
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.scss']
})
export class GithubCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    GitHubCalendar(".calendar", "santigo055", {
      responsive: true,
      tooltips: true
    });
  }

}
