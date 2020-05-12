import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from 'src/components/landing-page/landing-page.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { RecipeDetailsComponent } from 'src/components/recipe-details/recipe-details.component';
import { AdminPageComponent } from 'src/components/admin-page/admin-page.component';


const routes: Routes = [
  // {
  //   path: 'landing',
  //   loadChildren: () => import('../components/landing-page/landing-page.module')
  //       .then(m => m.LandingPageModule),
  //   data: { preload: true}
  // },
  {path: 'landing', component: LandingPageComponent},
  { path: 'recipe', component: RecipeDetailsComponent },
  { path: 'admin', component: AdminPageComponent },
  // {
  //   path:'recipe',
  //   loadChildren: () => import('../components/recipe-details/recipe-details.module')
  //         .then(m => m.RecipeDetailsModule)
  // },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
