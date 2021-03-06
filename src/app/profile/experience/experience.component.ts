import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Operador Técnico",
        company: "Indicom S.A",
        color: "#3781c2",
        companylogo: "https://media-exp3.licdn.com/dms/image/C560BAQGpRHZ8JA7qcg/company-logo_200_200/0/1519888677139?e=2159024400&v=beta&t=R5v2hFWnC1CJBZ_FRaJv5ZBjOj7uMlb7n39gjR4U9DE",
        date: "Ene 2015 - Jun 2016",
        desc: "Operador de soporte técnico nivel 1 a clientes residenciales",
      },
      {
        role: "Field Support",
        company: "Mega Tech S.A",
        color: "#ff9102",
        companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSr4hYDWZhTW7ep7g5HWnnbtD5QcF4pchw_WoYp4sNnYq6KLmogLQt9jO7_0-QJWsbIY&usqp=CAU",
        date: "Jun 2016 - Oct 2021",
        desc: "Realizando Soporte técnico onsite",
      },
      {
        role: "Fullstack Developer",
        company: "Mega Tech S.A",
        color: "#ff9102",
        companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSr4hYDWZhTW7ep7g5HWnnbtD5QcF4pchw_WoYp4sNnYq6KLmogLQt9jO7_0-QJWsbIY&usqp=CAU",
        date: "Oct 2021 - Ene 2022",
        desc: "Desarrollo de chatbot web (js, html, css) y Android nativo en kotlin",
      },
      {
        role: "Fullstack Developer .NET",
        company: "ANSES",
        color: "#23CD0F",
        companylogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/ANSES-Logo.svg/1200px-ANSES-Logo.svg.png",
        date: "Feb 2022 - Presente",
        desc: "Desarrollo de sistema interno de controles previsionales con .NET, HTML, CSS",
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
