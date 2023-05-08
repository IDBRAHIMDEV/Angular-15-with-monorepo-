import { AuthGuard } from '@medcoding/users';
import { Route } from '@angular/router';

import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';

export const appRoutes: Route[] = [
    {path: 'admin', component: DashboardComponent, canActivate: [AuthGuard]},
    {
        path: 'admin/category',
        component: ListCategoryComponent, canActivate: [AuthGuard]
    },
    {
        path: 'admin/category/add',
        component: AddCategoryComponent, canActivate: [AuthGuard]
    },
    {
        path: 'admin/category/edit/:id',
        component: EditCategoryComponent, canActivate: [AuthGuard]
    }
];
