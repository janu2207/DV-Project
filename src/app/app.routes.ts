import {HomeComponent} from "./pages/home/home.component";
import { DiseaseListComponent } from "./pages/disease-list/disease-list.component";
import { MapDiseaseComponent } from "./pages/map-disease/map-disease.component";

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

];
