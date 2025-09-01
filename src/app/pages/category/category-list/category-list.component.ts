import { Component, OnInit } from '@angular/core';
import { CustomTitleService } from '@shared/services/custom-title.service';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { CategoryService } from 'src/app/services/category.service';
import { componentSettings } from './category-list-config';
import { CategoryApi } from 'src/app/responses/category/category.response';
import { DatesFilter } from '@shared/functions/actions';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryManageComponent } from '../category-manage/category-manage.component';
import Swal from 'sweetalert2';
import { FiltersBox, SearchOptions } from '@shared/models/search-options-interface';

@Component({
  selector: 'vex-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  animations: [stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class CategoryListComponent implements OnInit {

  component


  constructor(
    customTitle:CustomTitleService, 
    public _categoryService: CategoryService,
    public _dialog: MatDialog)
    
    
  {
    customTitle.set('Categorias')
  }

  ngOnInit(): void {
    this.component = componentSettings
  }

  
  setData(data: any =null){
    this.component.filters.stateFilter= data.value
    this.component.menuOpen=false
    this.formatGetInputs()
  }
  search(data :FiltersBox){
    this.component.filters.numFilter= data.searchValue
    this.component.filters.textFilter= data.searchData
    this.formatGetInputs()
  }

  datesFiltersOpen(){ 

    
    DatesFilter(this)
  }


  formatGetInputs(){
    let inputs={
      numFilter:0,
      textFilter:"",
      stateFilter:null,
      startdate:null,
      enddate:null
    
    }

    if(this.component.filters.numFilter!=""){
        inputs.numFilter=this.component.filters.numFilter
        inputs.textFilter=this.component.filters.textFilter
    }

    if(this.component.filters.stateFilter!= null){
      inputs.stateFilter=this.component.filters.stateFilter
    }
    if(this.component.filters.startDate!= null){
      inputs.startdate=this.component.filters.startDate
    }
    if(this.component.filters.startDate!= "" && this.component.filters.endDate!= "" ){
      inputs.startdate= this.component.filters.startDate
      inputs.enddate= this.component.filters.endDate
    }


    this.component.getInputs=inputs

    }
  openDialogRegister(){
    this._dialog.open(CategoryManageComponent,{
      disableClose: true,
      width: '400px'
    }).afterClosed().subscribe(
      (res)=>{
        if(res){
          this.formatGetInputs()
        }
      }
    )

  }
  rowClick(e : any){
    let action =e.action
    let category = e.row

    switch(action){

      case "edit":
        this.CategoryEdit(category)
        break
      case "remove":
        this.CategoryRemove(category)
        break
    }
    return false
  }
  //video 21
  CategoryEdit(row : CategoryApi){
    const dialogConfig= new MatDialogConfig()
    dialogConfig.data= row
    
    let dialogRef = this._dialog.open(CategoryManageComponent, {
      data:dialogConfig,
      disableClose: true,
      width: '400px'

    })
    dialogRef.afterClosed().subscribe((res)=>{
        if(res){
          this.formatGetInputs()
        }
      }
    )


  }
  //video21
  CategoryRemove(category : any){
    Swal.fire({
      title:`Deseas eliminar la categoria ${category.name} ?`,
      text:"se borrara de forma permanente",
      icon:'warning',
      showCancelButton:true,
      focusCancel:true,
      confirmButtonColor:'rgb(210,155,253)',
      cancelButtonColor:'rgb(79,109,253)',
      confirmButtonText:'Si, eliminar',
      cancelButtonText:'Cancelar',
      width:430
    }).then((result)=>{
      if(result.isConfirmed){
          this._categoryService.CategoryRemove(category.categoryId).subscribe(()=>{
        this.formatGetInputs()})
      }
    
    })

  }
}


