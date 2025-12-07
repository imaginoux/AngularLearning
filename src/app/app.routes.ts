import { Routes } from '@angular/router';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { CardComponent } from './card/card.component';
import { OverviewComponent } from './overview/overview.component';
export const routes: Routes = [

    { path: '' , component:ContentareaComponent ,

        children: [
            {path:'card', component: CardComponent},
            {path:'overview', component: OverviewComponent}

        ]



    },
];
