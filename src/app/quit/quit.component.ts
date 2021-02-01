import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-quit',
  templateUrl: './quit.component.html',
  styleUrls: ['./quit.component.css']
})
export class QuitComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit(): void {
    this.app.last = 'quit'
  }

}
