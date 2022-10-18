import {Component, Input, OnInit} from '@angular/core';
import {ApareilService} from "../service/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
@Input() appareilName: string ;
 @Input() appareilStatus: string = 'éteint';
  @Input() index: number;
  @Input() id: number;
  constructor(private appareilService: ApareilService) { }

  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
