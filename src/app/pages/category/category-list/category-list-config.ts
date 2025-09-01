import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { Category } from "src/app/responses/category/category.response";
import icCategory from "@iconify/icons-ic/twotone-category";
import { LayoutStyleBuilder } from "@angular/flex-layout";
import { ListTableMenu } from "src/app/commons/list-table-menu.interface";
import icViewHeadLine from "@iconify/icons-ic/twotone-view-headline";
import icLabel from "@iconify/icons-ic/twotone-label";
import { filter } from "rxjs/operators";
import { GenericValidators } from "@shared/validators/generic-validators";
import icCalendarMonth from "@iconify/icons-ic/twotone-calendar-today";
import { TableColumns } from "@shared/models/list-table.interface";
import { SearchOptions } from "@shared/models/search-options-interface";


const searchOptions :SearchOptions[] = [
    {
        label: "Nombre",
        value: 1,
        placeholder: "buscar por nombre",
        validation: [GenericValidators.defaultName],
        validation_desc: "solo se permiten letras en esta busqueda",
        icon:"icName"

    },
    {
        label: "Descripcion",
        value: 2,
        placeholder: "buscar por descipcion",
        validation: [GenericValidators.defaultDescription],
        validation_desc: "solo se permiten letras y numeros en esta busqueda",
        icon:"icDescription"
  
    },

]
const menuItems: ListTableMenu[] = [
    {
        type: "link",
        id: "all",
        icon: icViewHeadLine,
        label: "Todos"
    },
    {
        type: "link",
        id: "Activo",
        value: 1,
        icon: icViewHeadLine,
        label: "Activo",
        classes: {
            icon: "text-green"
        }
    },
    {
        type: "link",
        id: "Inactivo",
        value: 0,
        icon: icViewHeadLine,
        label: "Inactivo",
        classes: {
            icon: "text-gray"
        }
    }
]


const tableColumns: TableColumns<Category>[] = [
    {
        label: "NOMBRE",
        cssLabel: ["fond-bold", "text-sm"],
        property: "name",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: true,
        sort: true,
        sortProperty: "name",
        visible: true,
        download: true
    },
    {
        label: "DESCRIPCION",
        cssLabel: ["fond-bold", "text-sm"],
        property: "description",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "description",
        visible: true,
        download: true
    },
    {
        label: "F. CREACION",
        cssLabel: ["fond-bold", "text-sm"],
        property: "auditCreateDate",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "datetime",
        sticky: false,
        sort: true,
        visible: true,
        download: true
    },
    {
        label: "ESTADO",
        cssLabel: ["fond-bold", "text-sm"],
        property: "stateCategory",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "badge",
        sticky: false,
        sort: false,
        visible: true,
        download: true
    },
    {
        label: "",
        cssLabel: [],
        property: "icEdit",
        cssProperty: [],
        type: "icon",
        action: "edit",
        sticky: false,
        sort: false,
        visible: true,
        download: false
    },
    {
        label: "",
        cssLabel: [],
        property: "icDelete",
        cssProperty: [],
        type: "icon",
        action: "remove",
        sticky: false,
        sort: false,
        visible: true,
        download: false
    }
]
const filters = {
    numfiter: 0,
    textFilter: "",
    stateFilter: null,
    startDate: null,
    endDate: null
}
const inputs = {
    numfiter: 0,
    textFilter: "",
    stateFilter: null,
    startDate: null,
    endDate: null
}


export const componentSettings = {
    //icons
    icCategory: icCategory,
    icCalendarMonth: icCalendarMonth,
    //layaout settings
    menuOpen: false,
    //table settings
    tableColumns: tableColumns,
    initialSort: "Id",
    initialSortDir: "desc",
    getInputs: inputs,
    butttonLabel: "EDITAR",
    butttonLabel2: "ELIMINAR",

    // filtros
    menuItems: menuItems,
    searchOptions: searchOptions,
    filters_dates_active: false,
    filters: filters,
    datesFilterArray: ['Fecha de creacion'],
    columnsFilter: tableColumns.map((column) => { return { label: column.label, property: column.property, type: column.type } })

}