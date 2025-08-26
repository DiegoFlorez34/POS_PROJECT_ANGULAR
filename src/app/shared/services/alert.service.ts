import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

success(title: string, message: string ){
  Swal.fire({
    title:title,
    text:message,
    icon:'success',
    confirmButtonColor:'#3085d6',
    width:430
  })
}
wram(title: string, message: string ){
  Swal.fire({
    title:title,
    text:message,
    icon:'warning',
    confirmButtonColor:'#3085d6',
    width:430
  })
}
 error(title: string, message: string ){
  Swal.fire({
    title:title,
    text:message,
    icon:'error',
    confirmButtonColor:'#3085d6',
    width:430
  })
}
}
