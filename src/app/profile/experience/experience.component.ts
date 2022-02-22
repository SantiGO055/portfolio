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
      ,
      {
        role: "Fullstack Developer .NET",
        company: "ANSES",
        color: "#23CD0F",
        companylogo: "data:image/png;base64,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",
        date: "Feb 2022 - Presente",
        desc: "Desarrollo de sistema interno de controles previsionales con .NET, HTML, CSS",
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
