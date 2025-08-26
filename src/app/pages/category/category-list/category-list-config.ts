import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { Category } from "src/app/responses/category/category.response";
import icCategory from "@iconify/icons-ic/twotone-category";
import { LayoutStyleBuilder } from "@angular/flex-layout";
import { ListTableMenu } from "src/app/commons/list-table-menu.interface";
import icViewHeadLine from "@iconify/icons-ic/twotone-view-headline";
import icLabel from "@iconify/icons-ic/twotone-label";
import { filter } from "rxjs/operators";
import { GenericValidators } from "@shared/validators/generic-validators";
import icCalendarMonth  from "@iconify/icons-ic/twotone-calendar-today";


const searchOptions=[
    {
    label:"Nombre",
    value:1,
    placeholder:"buscar por nombre",
    validation:[GenericValidators.defaultName],
    validation_desc:"solo se permiten letras en esta busqueda",
    min_length:2,
    },
    {
    label:"Descripcion",
    value:2,
    placeholder:"buscar por descipcion",
    validation:[GenericValidators.defaultDescription],
    validation_desc:"solo se permiten letras y numeros en esta busqueda",
    min_length:2,
    },

]
const menuItems : ListTableMenu[]=[
    {
    type:"link",
    id:"all",
    icon: icViewHeadLine,
    label:"Todos"
    },
    {
    type:"link",
    id:"Activo",
    value:1,
    icon: icViewHeadLine,
    label:"Activo",
    classes:{
        icon:"text-green"
    }
    },
    {
    type:"link",
    id:"Inactivo",
    value:0,
    icon: icViewHeadLine,
    label:"Inactivo",
    classes:{
        icon:"text-gray"
    }
    }
]


const tableColumns: TableColumn<Category>[] = [
    {
        label:"NOMBRE",
        property:"name",
        type:"text",
        cssClasses:['font-medium','w10']

    },
    {
        label:"DESCRIPCION",
        property:"description",
        type:"textTruncate",
        cssClasses:['font-medium','w10']
    },
    {
        label:"Fecha de creación",
        property:"auditCreateDate",
        type:"datetime",
        cssClasses:['font-medium','w10']
    },
    {
        label:"F. creación",
        property:"auditCategory",
        type:"datetime",
        cssClasses:['font-medium','w10']
    },
     {
        label:"ESTADO",
        property:"stateCategory",
        type:"badge",
        cssClasses:['font-medium','w10']
    },

    {
        label:"Acciones",
        property:'menu',
        type:"buttonGroup",
        buttonItems:[{
            buttonLabel:"EDITAR",
            buttonAction:"edit",
            buttonCondition : null,
            disable: false
        },
        {
            buttonLabel:"ELIMINAR",
            buttonAction:"remove",
            buttonCondition : null,
            disable: false
        }
        
    ],
    cssClasses:['font-medium','w10']
    }
]
const filters={
    numfiter:0,
    textFilter:"",
    stateFilter:null,
    startDate:null,
    endDate:null
}
const inputs ={
    numfiter:0,
    textFilter:"",
    stateFilter:null,
    startDate:null,
    endDate:null
}


export const componentSettings={
    //icons
    icCategory:icCategory,
    icCalendarMonth:icCalendarMonth,
    //layaout settings
    menuOpen:false,
    //table settings
    tableColumns:  tableColumns,
    initialSort:"Id",
    initialSortDir:"desc",
    getInputs : inputs,
    butttonLabel:"EDITAR",
    butttonLabel2:"ELIMINAR",

    // filtros
    menuItems:menuItems,
    searchOptions:searchOptions,
    filters_dates_active:false,
    filters:filters,
    datesFilterArray:['Fecha de creacion'],
    columnsFilter: tableColumns.map((column)=> {return {label:column.label,property:column.property, type: column.type} })

}