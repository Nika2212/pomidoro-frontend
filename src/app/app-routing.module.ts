import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {AuthorComponent} from "./pages/author/author.component";
import {DebuggerComponent} from "./pages/debugger/debugger.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'debugger', component: DebuggerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
