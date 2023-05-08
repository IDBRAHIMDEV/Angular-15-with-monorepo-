import { AuthInterceptor } from './../../../../libs/users/src/lib/services/auth.interceptor';
import { AuthGuard } from '@medcoding/users';
import { UsersModule } from './../../../../libs/users/src/lib/users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ListCategoryComponent, AddCategoryComponent, EditCategoryComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
