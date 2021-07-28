import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './components/report/report.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"report",
    component:ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
