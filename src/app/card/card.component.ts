import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  public image:string="https://img.freepik.com/vector-gratis/arboles-variedad-sobre-fondo-transparente_1308-74932.jpg";
  public Titulo:string="Curso de angular con Interpolacion";

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
