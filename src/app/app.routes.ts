import { Routes } from '@angular/router';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { CardComponent } from './card/card.component';
import { OverviewComponent } from './overview/overview.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
export const routes: Routes = [

    { path: '', component:ContentareaComponent,

        children: [
            {path:'card', component: CardComponent},
            {path:'overview', component: OverviewComponent},
             {path:'transactions', component: TransactionsComponent},
             {path: 'account', component: AccountComponent},
             {path: 'dasboard', component: DashboardComponent},
             {path: 'templateform',component: TemplateDrivenFormComponent},
             {path: 'reactiveform', component: ReactiveFormComponent}
        ]



    },
];
