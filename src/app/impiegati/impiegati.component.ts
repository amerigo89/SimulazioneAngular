import { Component, OnInit } from '@angular/core';
import { ImpiegatiService } from '../impiegati.service';  
import { Impiegato } from '../impiegato.model';  
import { Router, ActivatedRoute } from "@angular/router";  

@Component({
  selector: 'app-impiegati',
  templateUrl: './impiegati.component.html',
  styleUrls: ['./impiegati.component.css']
})
export class ImpiegatiComponent implements OnInit {

  impiegati: Impiegato[];

  visible: boolean = false;

  constructor(private impiegatoService: ImpiegatiService) { }

  ngOnInit() {
    this.impiegatoService.getImpiegati().subscribe(data => this.impiegati = data);
  }

  showTable(){
    if(this.visible == true){
      this.visible = false;
    }
    else{
      this.visible = true;
    }
  }

}
