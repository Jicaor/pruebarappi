import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ShopppingCarComponent } from './shoppping-car/shoppping-car.component';

import { MonedaColombiaPipe } from './pipes/moneda/moneda-colombia.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { SearchComponent } from './filters/search/search.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { SortComponent } from './filters/sort/sort.component';
import { CategoryPipe } from './pipes/category/category.pipe';
import { CategoryComponent } from './filters/category/category.component';
import { PricePipe } from './pipes/price/price.pipe';
import { PriceComponent } from './filters/price/price.component';
import { TypePipe } from './pipes/type/type.pipe';
import { TypeComponent } from './filters/type/type.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    MonedaColombiaPipe,
    SearchPipe,
    SearchComponent,
    SortPipe,
    SortComponent,
    CategoryPipe,
    CategoryComponent,
    PricePipe,
    PriceComponent,
    TypeComponent,
    TypePipe,
    ShopppingCarComponent
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
