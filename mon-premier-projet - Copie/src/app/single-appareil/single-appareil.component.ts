import { Component, OnInit } from '@angular/core';
import {ApareilService} from "../service/appareil.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'Statut';
  constructor(private apareilservice: ApareilService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.apareilservice.getAppareilById(+id).name;
    this.status = this.apareilservice.getAppareilById(+id).status;
  }

}
