import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  componente = 'componenteimc';
  contactForm = new FormGroup({
    nombre: new FormControl(''),
    peso: new FormControl,
    altura: new FormControl,
    sistema: new FormControl(''),
    composicioncorporal: new FormControl(''),
    solucion: new FormControl
  });

  constructor() {}

  onSubmit() {
    const { nombre, peso, altura, sistema } = this.contactForm.value;
    let imc = peso / (altura * altura);
    let tipocuerpo = imc < 18.5 ? 'peso bajo' : imc < 24.9 ? 'peso normal' : imc < 29.9 ? 'sobrepeso' : 'obesidad';
    if (sistema === 'ingles') {
      imc *= 703;
    }
    this.contactForm.get("solucion")?.setValue(nombre + " tiene un IMC de (" + imc.toString() + ") y tiene " + tipocuerpo);
  }
}





