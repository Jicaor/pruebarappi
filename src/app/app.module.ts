import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoryComponent } from './filters/category/category.component';
import { PriceComponent } from './filters/price/price.component';
import { SearchComponent } from './filters/search/search.component';
import { SortComponent } from './filters/sort/sort.component';
import { TypeComponent } from './filters/type/type.component';
import { CategoryPipe } from './pipes/category.pipe';
import { MonedaPipe } from './pipes/moneda.pipe';
import { PricePipe } from './pipes/price.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TypePipe } from './pipes/type.pipe';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    CategoryComponent,
    PriceComponent,
    SearchComponent,
    SortComponent,
    TypeComponent,
    CategoryPipe,
    MonedaPipe,
    PricePipe,
    SearchPipe,
    SortPipe,
    TypePipe,
    ShoppingCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
