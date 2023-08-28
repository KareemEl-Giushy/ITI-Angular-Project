import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ListBoxDirective } from './Directives/list-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { DateFormatePipe } from './pipe/date-formate.pipe';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { OrderDetailsComponent } from './components/Order/order-details/order-details.component';
import { ShoppingComponent } from './components/Shopping/shopping/shopping.component';
import { ShoppingDetailsComponent } from './components/Shopping-details/shopping-details/shopping-details.component';
import { HttpClientModule, HttpErrorResponse, HttpHeaderResponse, HttpRequest, HttpResponse } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    ListBoxDirective,
    USDtoEGPPipe,
    DateFormatePipe,
    OrderMasterComponent,
    OrderDetailsComponent,
    ShoppingComponent,
    ShoppingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
