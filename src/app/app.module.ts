import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatExpansionModule, MatSliderModule ,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { ConfigurationService } from 'api';
import { TableModule } from 'primeng/table';
import { AngularMaterialModule } from './material.module';
import { NavigationService } from './services/navigation.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityStoreModule, TalentStoreModule } from 'store';
import { DataModule } from './data/data.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ActivityStoreModule,
    TalentStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    NavigationService,
    { provide: APP_INITIALIZER, useFactory: initConfigValues, deps: [ConfigurationService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function initConfigValues(config: ConfigurationService) {
  return (_ => config.initConfiguration(environment.configPath));
}