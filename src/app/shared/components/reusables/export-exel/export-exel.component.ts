import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsService } from '@shared/services/icons.service';
import { DownloadXslxService } from '@shared/services/download-xslx.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { UrlSegment } from '@angular/router';
import { IconsModule } from '@shared/import-modules/icons.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-export-exel',
  standalone: true,
  imports: [CommonModule,IconsModule,MatButtonModule,MatTooltipModule],
  templateUrl: './export-exel.component.html',
  styleUrls: ['./export-exel.component.scss']
})
export class ExportExelComponent implements OnInit {

  icCloudDownload = IconsService.prototype.getIcon("icCloudDownload");
  @Input() url: string = null;
  @Input() getInputs: string = null;
  @Input() filename: string = null;
  infoTooltip ="Descargar resultados en formato exel";

  constructor(
    public _downloadXslxService: DownloadXslxService,
    private _spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }
  download(){
    Swal.fire({
      title:"Confirmar",
          text:"Esta accion descargará los registros en formato .xlsx ignorando la paginacion",
          icon:'warning',
          showCancelButton:true,
          focusCancel:true,
          confirmButtonColor:'rgb(210,155,253)',
          cancelButtonColor:'rgb(79,109,253)',
          confirmButtonText:'Aceptar',
          cancelButtonText:'Cancelar',
          width:430
        }).then((result)=>{
          if(result.isConfirmed){
              this.executeDownload();
          }
    })
  }
  executeDownload(){
    this._spinner.show();
    this._downloadXslxService.executeDownload(this.url+this.getInputs)
    .subscribe((exelData:Blob)=>{
      const filename =this.filename;
      const blobUrl= URL.createObjectURL(exelData);
      const downloadLink= document.createElement("a");
      downloadLink.href= blobUrl;
      downloadLink.download=filename;
      downloadLink.click();
      URL.revokeObjectURL(blobUrl);

      this._spinner.hide();

    })
  }

}
