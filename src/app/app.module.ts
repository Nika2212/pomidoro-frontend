import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './pages/main/main.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {AuthorComponent} from './pages/author/author.component';
import {TimerComponent} from './shared/components/timer/timer.component';
import {StepperComponent} from './shared/components/stepper/stepper.component';
import {ControllerComponent} from './shared/components/controller/controller.component';
import {DebuggerComponent} from './pages/debugger/debugger.component';
import {RoundProgressModule} from "angular-svg-round-progressbar";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SettingsComponent,
    AuthorComponent,
    TimerComponent,
    StepperComponent,
    ControllerComponent,
    DebuggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
