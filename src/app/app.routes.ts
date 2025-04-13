import { Routes } from '@angular/router';
import { HsrWorldWindowComponent } from './pages/windows/hsr-world-window/hsr-world-window.component';
import { TestComponent } from './pages/test/test.component';
import { RandomManagerComponent } from './random-manager/random-manager.component';
import { Windows98WindowComponent } from './pages/windows/windows98-window/windows98-window.component';

export const routes: Routes = [
  { path: '', component: RandomManagerComponent},
    { path: 'hsr', component: HsrWorldWindowComponent },
    { path: 'test', component: TestComponent },
    { path: 'window', component: Windows98WindowComponent },
];
