import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListTableComponent } from '@shared/components/reusables/list-table/list-table.component';
import { SearchBoxMultipleComponent } from '@shared/components/reusables/search-box-multiple/search-box-multiple.component';
import { MenuComponent } from '@shared/components/reusables/menu/menu.component';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProviderManageComponent } from './components/provider-manage/provider-manage.component';
import { DownloadXslxService } from '@shared/services/download-xslx.service';
import { ExportExelComponent } from '@shared/components/reusables/export-exel/export-exel.component';


@NgModule({
  declarations: [
    ProviderListComponent,
    ProviderManageComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule,
    ListTableComponent,
    SearchBoxMultipleComponent,
    MenuComponent,
    ExportExelComponent
  ]
})
export class ProviderModule { }
