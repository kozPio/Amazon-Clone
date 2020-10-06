import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  { path: 'productPage/:id', component: ProductPageComponent },
  { path: 'main', component: BodyComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
