import { Component, SimpleChanges } from '@angular/core';
import { ImpiegatiService } from './impiegati.service';  
import { Impiegato } from './impiegato.model';
import { DipartimentiService } from './dipartimenti.service';  
import { Dipartimento } from './dipartimento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimulazioneAngular';

  impiegati: Impiegato[];
  dipartimenti: Dipartimento[];
  impiegatiAnziani: Impiegato[]=[];
  quantity = 0;

  visible: boolean = false;

  constructor(private impiegatoService: ImpiegatiService, private dipartimentoService: DipartimentiService) { }

  ngOnInit() {
    this.impiegatoService.getImpiegati().subscribe(data => this.impiegati = data);
    this.dipartimentoService.getDipartimenti().subscribe(data => this.dipartimenti = data);
  }

  showTable(){
    if(this.visible == true){
      this.visible = false;
    }
    else{
      this.visible = true;
    }
  }

  filter(idDip: number){
      return this.impiegatoService.getImpiegatiAnziani(idDip).subscribe(data => this.impiegatiAnziani = data);
  }

  setQuantity(num: number){
      this.quantity = num;
  }

  test(dip: number, num:number){
    this.quantity = num;
    return this.impiegatoService.getImpiegatiAnziani(dip).subscribe(data => this.impiegatiAnziani = data);
  }
}
