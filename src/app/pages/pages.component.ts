import { SettingsService } from './../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  //const serv
  constructor(private SettingsService: SettingsService) {}

  ngOnInit(): void {}
}
