import { Component, OnInit } from '@angular/core';
import { TipsService } from '../tips.service';

@Component({
  selector: 'annex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    public tips: any;
    public tipsString: string = '';
    public tipsKeys: string[][] = [[]];
    public currentKey: string = "Tips!";

    constructor(private tipsService: TipsService) {}

    ngOnInit(): void {
      this.tipsService.getTips().subscribe(data => {
        this.tips = data;
        this.parseTips();
        console.log('got tips.', this.tips);
      });
    }

    parseTips(): void {
      let currentKeys: string[] = [];
      Object.keys(this.tips).forEach(key => {
        currentKeys.push(key);
      });
      this.tipsKeys[0] = currentKeys;


    }

    
  
}
