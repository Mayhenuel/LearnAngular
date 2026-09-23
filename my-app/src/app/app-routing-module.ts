import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { CatalogProduct} from './catalog-product/catalog-product';
import { CustomerHttp } from './customer-http/customer-http';

const routes: Routes = [
  {
    path: 'learn-directive',
    component: ProductListComponent
  },

  {
    path: 'product-dropdown-list',
    component: ProductDropdownListComponent
  },

  {
    path: 'product-list-call-service',
    component: ProductListCallServiceComponent
  },

  {
    path: 'product-list-call-http-service',
    component: ProductListCallHttpServiceComponent
  },
  {
    path: 'product-http-handle-error-service',
    component: ProductHttpHandleErrorServiceComponent
  },

  // LIST
  {
    path: 'service-product-image-event',
    component: ServiceProductImageEvent
  },

  // DETAIL
  {
    path: 'service-product-image-event/:id',
    component: ServiceProductImageEventDetail
  }, 
  {
    path: "catalog-product",
    component: CatalogProduct
  }, 
  {
    path: "customer-http",
    component: CustomerHttp
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}