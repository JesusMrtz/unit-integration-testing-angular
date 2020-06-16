import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  doctors: any[] = [];

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
  }


  sayHello(name: string) {
    return `Hola ${name}`;
  }

  getDoctor() {
    this.medicoService.getDoctor().subscribe((response: any) => this.doctors = response);
  }

}
