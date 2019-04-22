import {HomeComponent} from "./pages/home/home.component";
import { DiseaseListComponent } from "./pages/disease-list/disease-list.component";
import { MapDiseaseComponent } from "./pages/map-disease/map-disease.component";
import { WordCloudComponent } from "./pages/word-cloud/word-cloud.component";
import { TreeComponent } from "./pages/tree/tree.component";
import { SeasonalTrendComponent } from "./seasonal-trend/seasonal-trend.component";
import { LinegraphComponent } from "./pages/linegraph/linegraph.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
    {
      path: 'diseases',
      component: DiseaseListComponent
  },
  {
    path: 'map',
    component: MapDiseaseComponent
},
{
  path: 'wordCloud',
  component: WordCloudComponent
},
{
  path: 'tree',
  component: TreeComponent
},
{
  path: 'line',
  component: SeasonalTrendComponent
},
{
  path: 'linegraph',
  component: LinegraphComponent
},




];
