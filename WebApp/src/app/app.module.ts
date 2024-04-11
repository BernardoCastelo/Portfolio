import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { AlterComponent } from './pages/experience/alter/alter.component';
import { AnkixComponent } from './pages/experience/ankix/ankix.component';
import { BeeComponent } from './pages/experience/bee/bee.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { NixieComponent } from './pages/nixie/nixie.component';
import { PhotomanagerComponent } from './pages/photomanager/photomanager.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { IntroComponent } from './pages/intro/intro.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { EquusComponent } from './pages/experience/equus/equus.component';
import { TimelineComponent } from './components/alter/timeline.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    NixieComponent,
    PhotomanagerComponent,
    PortfolioComponent,
    BeeComponent,
    AlterComponent,
    AnkixComponent,
    IntroComponent,
    AcademicComponent,
    EquusComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzImageModule,
    NzTimelineModule,
    NzAvatarModule,
    NzDividerModule,
    NzTypographyModule,
    NzTagModule,
    NzPopoverModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
