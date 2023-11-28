import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NavigationService } from '@features/navigation/services/navigation.service';
import { ProjectPageActions } from '@features/project/state/actions';
import { AppState } from '@core/interfaces/app.state';
import { Project } from '@core/interfaces/project';
import { getProjects } from '@features/project/state/project.selectors';
import { User } from '@core/interfaces/user';
import { getCurrentUser } from '@features/user/state/user.selectors';
import { loadUsers } from '@features/user/state/actions/user.actions';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subsNotifier = new Subject();
  projects$: Observable<Project[]>;
  currentUser$: Observable<User>;

  isSidebarCollapsed = false;

  constructor(
    private navigationService: NavigationService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navigationService.sidebarCollapseStatusChanged$
      .pipe(takeUntil(this.subsNotifier))
      .subscribe(
        (collapseStatus) => (this.isSidebarCollapsed = collapseStatus)
      );

    this.store.dispatch(ProjectPageActions.loadProjects());
    this.projects$ = this.store.select(getProjects);
    this.store.dispatch(loadUsers());
    this.currentUser$ = this.store.select(getCurrentUser);

    this.router.events.pipe(takeUntil(this.subsNotifier)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIsRegisterPageRoute();
      }
    });
  }

  private checkIsRegisterPageRoute(): boolean {
    return this.router.url.includes('/register-page');
  }

  isRegisterPageRoute(): boolean {
    return this.router.url.includes('register-page');
  }

  isLoginPageRoute(): boolean {
    return this.router.url.includes('login-page');
  }

  onSidebarCollapsed(sidebarCollapsedStatus: boolean): void {
    this.navigationService.collapseSidebar(sidebarCollapsedStatus);
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }
}
