import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {Topnavbar} from './components/topnavbar/topnavbar.component';
import {Navigation} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {HomeComponent} from './pages/home/home.component';
import { RestService } from './shared';
import { DiseaseListComponent } from './pages/disease-list/disease-list.component';
import { MapDiseaseComponent } from './pages/map-disease/map-disease.component';
import { WordCloudComponent } from './pages/word-cloud/word-cloud.component';
import { TreeComponent } from './pages/tree/tree.component';



// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load themes
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { LinegraphComponent } from './pages/linegraph/linegraph.component';


@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    DiseaseListComponent,
    MapDiseaseComponent,
    WordCloudComponent,
    TreeComponent,

    LinegraphComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
