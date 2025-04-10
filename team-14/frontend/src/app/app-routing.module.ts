import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import {TranslatorComponent} from "./translator/translator.component";
import {ProjectAssetsComponent} from "./project-assets/project-assets.component";

const routes: Routes = [
  // {path: 'projects', component: ProjectListComponent},
  {path: 'project/:project-id', component: ProjectDetailsComponent},
  // {path: 'project/:project-id/assets', component: ProjectAssetsComponent},
  {path: 'translator/:project-id/:language', component: TranslatorComponent},
  {path: '**', redirectTo: '/project/5', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
