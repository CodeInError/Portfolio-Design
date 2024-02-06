import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortFolioComponent } from './components/port-folio/port-folio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { WebsiteDashboardComponent } from './components/website-dashboard/website-dashboard.component';
import { WebsiteElementsComponent } from './components/website-elements/website-elements.component';
import { PortfolioDisplayComponent } from './components/portfolio-display/portfolio-display.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'port-folio',
  component: PortFolioComponent
  },
  {
    path: 'portfolio-details/:id',
    component: PortfolioDetailsComponent
  },
  {
  path:'about',
  component: AboutComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'services',
  component:ServicesComponent
},
{
  path:'resume',
  component:ResumeComponent
},
{
  path:'login',
  component:LoginPageComponent
},
{
  path:'websiteDashboard',
  component:WebsiteDashboardComponent
},{
  path:'websiteDashboard/elements',
  component:WebsiteElementsComponent
},
{
  path:'PortfolioDisplay',
  component: PortfolioDisplayComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
