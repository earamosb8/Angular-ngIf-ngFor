import { Component } from '@angular/core';

@Component({
    //configuro el selector que va a tener dentro de los html
    selector: 'app-header',
    //podemos colocar codigo html directamente
    //aunque si es muy grande es mejor hacerlo
    //desde un archivo externo
    //template: `<h1>Header Componente </h1>` 
    //se usa template si voy a escribir el codigo html desde aqui
    //si se va hacer desde un archivo externo entonces debes usar templateURL
    templateUrl: './header.component.html'
})



 export class HeaderComponent {

}