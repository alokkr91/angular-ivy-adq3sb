import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      {
        path: 'products/:productId & :price',
        component: ProductDetailsComponent,
      },
    ]),
    MatIconModule,
    MatButtonModule,
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
