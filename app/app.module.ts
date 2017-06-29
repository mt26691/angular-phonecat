import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}