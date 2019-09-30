import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() {

   }
  ngOnInit() {
  }
  sortOpt = "Title";

  setSort(opt){
    this.sortOpt = opt;
  }
}