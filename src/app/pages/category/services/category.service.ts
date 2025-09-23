import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '@shared/services/alert.service';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { endpoint } from '@shared/apis/endpoints';    
import { List_Category_Request } from '../models/listcategory.request.interface';
import { map } from 'rxjs/operators';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { CategoryRequest } from '../models/category.request.interface';

import { CategoryResponse } from '../models/category.response.interface';
import { ReturnStatement } from '@angular/compiler';
import { getIcon } from '@shared/functions/helpers';
import { BaseResponse } from '@shared/models/base-api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http:HttpClient,
    private _alert:AlertService
  ) 
  { }

  GetAll(
    size,
    sort,
    order,
    page,
    getInputs,
  ): Observable<BaseResponse>{
    const requestUrl = `${env.api}${endpoint.LIST_CATEGORIES
    }?records=${size}&sort=${sort}&order=${order}&numPage=${page + 1}${getInputs}`;
    return this._http.get<BaseResponse>(requestUrl).pipe(
  map((data: BaseResponse) => {
    console.log("estado", data);
    
    data.data.forEach(function(e: CategoryResponse) {
      switch (e.state) {
        case 0:
          e.badgeColor = 'text-gray bg-gray-light';
          break;
        case 1:
          e.badgeColor = 'text-green bg-green-light';
          break;
        default:
          e.badgeColor = 'text-gray bg-gray-light';
          break;
      }
      e.icEdit= getIcon("icEdit","Editar Categoria",true);
      e.icDelete= getIcon("icDelete","Eliminar Categoria",true);
    });

    return data;
  })
);

  }

//video 20
  CategoryRegister(category: CategoryRequest):Observable<BaseResponse>{
    const requestUrl=`${env.api}${endpoint.CATEGORY_REGISTER}`
    return this._http.post(requestUrl, category).pipe(
      map((resp : BaseResponse)=>{
        return resp;
      })
    )
  }
  //video 21 
  CategoryById(CategoryId:number): Observable<CategoryResponse>{
    const requestUrl = `${env.api}${endpoint.CATEGORY_BY_ID}${CategoryId}`
    return this._http.get(requestUrl).pipe(
      map((resp: BaseResponse)=>{
        return resp.data
      })
    )
  }
  CategoryEdit(CategoryId:number, category : CategoryRequest): Observable<BaseResponse>{
    const requestUrl = `${env.api}${endpoint.CATEGORY_EDIT}${CategoryId}`
    return this._http.put(requestUrl, category).pipe(
      map((resp: BaseResponse)=>{
        return resp
      })
    )
    }
  CategoryRemove(CategoryId:number) : Observable<void>{
    const requestUrl = `${env.api}${endpoint.CATEGORY_REMOVE}${CategoryId}`
    return this._http.put(requestUrl,'').pipe(
      map((resp: BaseResponse)=>{
        if(resp.isSuccess){
          this._alert.success('Exelente',resp.message)
        }
      })
    )
  }
}



