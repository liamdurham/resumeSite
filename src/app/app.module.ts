import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from  '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { LedgerBarComponent } from './ledger-bar/ledger-bar.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProjectComponent } from './project/project.component';
import { AppRoutingModule }     from './app-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, MatIconModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent, LedgerBarComponent, BannerComponent, HomeComponent, DetailComponent, ProjectComponent, ResumeComponent, ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
