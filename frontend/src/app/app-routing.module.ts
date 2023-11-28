import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login-page'
  },
  {
    path: 'board',
    loadChildren: () => import('./pages/board-page/board-page.module').then(m => m.BoardPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/project-pages/project-pages.module').then(m => m.ProjectPagesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404-page/error404-page.module').then(m => m.Error404PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// RegisterPageRoutingModule
const registerRoutes: Routes = [
  {
    path: 'register-page',
    loadChildren: () => import('./pages/register-page/register-page.module').then(m => m.RegisterPageModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(registerRoutes)],
  exports: [RouterModule]
})

export class RegisterPageRoutingModule { }

// LoginPageRoutingModule
const loginRoutes: Routes = [
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})

export class LoginPageRoutingModule { }