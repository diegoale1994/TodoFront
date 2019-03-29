import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = '';
  welcomeMessageFromService: string;
  constructor(private activatedRoute: ActivatedRoute,
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
     this.user = this.activatedRoute.snapshot.params.name;
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(data => {
      this.welcomeMessageFromService = data.message;
    }, e => {
      this.welcomeMessageFromService = e.error.message;
    });
  }

  getWelcomeMessageWithParams() {
    this.welcomeDataService.executeHelloWorldBeanServiceWithPath(this.user).subscribe(data => {
      this.welcomeMessageFromService = data.message;
    }, e => {
      this.welcomeMessageFromService = e.error.message;
    });
  }

}
