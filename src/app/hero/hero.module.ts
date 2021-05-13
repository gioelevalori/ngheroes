import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from '../hero.service';
import { BackendService } from '../backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IconModule, TabsModule} from '@fundamental-ngx/core';
import { LayoutPanelModule } from '@fundamental-ngx/core';
import { ButtonModule } from '@fundamental-ngx/core';
import { FormModule } from '@fundamental-ngx/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TabsModule,
    LayoutPanelModule,
    ButtonModule,
    FormModule,
    RouterModule,
    IconModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,

  ],
  providers: [
    BackendService,
    HeroService,

  ],
  bootstrap: [ AppComponent ]
})
export class HeroModule { }
