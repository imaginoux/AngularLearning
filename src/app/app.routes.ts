import { Routes } from '@angular/router';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { CardComponent } from './card/card.component';
import { OverviewComponent } from './overview/overview.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TestTemplatedrivenFromComponent } from './test-templatedriven-from/test-templatedriven-from.component';
import { TemplateDrivenFormTest01Component } from './template-driven-form-test-01/template-driven-form-test-01.component';
import { PipeCaseDemoComponent } from './title-case-pipe-demo/title-case-pipe-demo.component';
import { LoginComponent } from './login/login.component';
import { PopupFormComponent } from './popup/popup.component';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { PopupTestComponent } from './popup-test/popup-test.component';
import{MonthlyCalendarComponent} from './monthly-calendar/monthly-calendar.component'


export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    {
    path:'', component: ContentareaComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path:'card', component: CardComponent},
            {path:'overview', component: OverviewComponent},
             {path:'transactions', component: TransactionsComponent},
             {path: 'account', component: AccountComponent},
             {path: 'templateform',component: TemplateDrivenFormComponent},
             {path: 'reactiveform', component: ReactiveFormComponent},
              {path: 'templatedrivenformpractice', component: TestTemplatedrivenFromComponent},
              {path: 'templatedrivenformpracticetest', component: TemplateDrivenFormTest01Component},
              {path: 'titlecasepipedemo', component: PipeCaseDemoComponent},
              {path: 'popup', component:PopupFormComponent},      
              {path: 'team-dashboard', component:TeamDashboardComponent},
              {path: 'popup-test', component: PopupTestComponent},
              { path: 'monthly-calendar', component: MonthlyCalendarComponent }
              
        ]
    },

      { path: '**', redirectTo: 'login' }
];