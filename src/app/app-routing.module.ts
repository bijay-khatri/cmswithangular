import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import { PoliticsComponent } from './politics/politics.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const appRoutes : Routes = [
    {
        path : 'home',
        component: HomeComponent
    },
    {
        path : 'politics',
        component: PoliticsComponent
    },
    {
        path: 'news/:id',
        component: ArticleDetailComponent
    }
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}