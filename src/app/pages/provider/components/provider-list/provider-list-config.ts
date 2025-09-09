import { SearchOptions } from "@shared/models/search-options-interface";
import { GenericValidators } from "@shared/validators/generic-validators";

import icViewHeadLine from "@iconify/icons-ic/twotone-view-headline";
import icLabel from "@iconify/icons-ic/twotone-label";
import { MenuItems } from "@shared/models/menu-items.interface";
import { IconsService } from "@shared/services/icons.service";
import { ProviderResponse } from "../../models/provider-response.interface";
import { TableColumns } from "@shared/models/list-table.interface";
import { filter } from "rxjs/operators";
import { LayoutStyleBuilder } from "@angular/flex-layout";


const searchOptions: SearchOptions[] = [
    {
        label: "Nombre",
        value: 1,
        placeholder: "buscar por nombre",
        validation: [GenericValidators.defaultName],
        validation_desc: "solo se permiten letras en esta busqueda",
        icon: "icName"

    },
    {
        label: "Email",
        value: 2,
        placeholder: "buscar por email",
        validation: [GenericValidators.emailValidation],
        validation_desc: "solo se permiten correos validos",
        icon: "icMail"

    },
    {
        label: "Numero Documento",
        value: 3,
        placeholder: "buscar por numero de documento",
        validation: [GenericValidators.document],
        validation_desc: "solo se permiten documentos validos",
        icon: "icDescription"

    },
];
const menuItems: MenuItems[] = [
    {
        type: "link",
        id: "all",
        icon: IconsService.prototype.getIcon("icViewHeadLine"),
        label: "Todos"
    },
    {
        type: "link",
        id: "Activo",
        value: 1,
        icon: IconsService.prototype.getIcon("icLabel"),
        label: "Activo",
        class: {
            icon: "text-green"
        }
    },
    {
        type: "link",
        id: "Inactivo",
        value: 0,
        icon: IconsService.prototype.getIcon("icLabel"),
        label: "Inactivo",
        class: {
            icon: "text-gray"
        }
    }
];

const tableColumns: TableColumns<ProviderResponse>[]=[
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
        label: "EMAIL",
        cssLabel: ["fond-bold", "text-sm"],
        property: "email",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky:false,
        sort: true,
        sortProperty: "email",
        visible: true,
        download: true
    },
    {
        label: "TIPO DE DOCUMENTO",
        cssLabel: ["fond-bold", "text-sm"],
        property: "documentType",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "documentType",
        visible: true,
        download: true
    },
    {
        label: "NUMERO DE DOCUMENTO",
        cssLabel: ["fond-bold", "text-sm"],
        property: "documentNumber",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "documentNumber",
        visible: true,
        download: true
    },
    {
        label: "DIRECCION",
        cssLabel: ["fond-bold", "text-sm"],
        property: "address",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "address",
        visible: true,
        download: true
    },
    {
        label: "TELEFONO",
        cssLabel: ["fond-bold", "text-sm"],
        property: "phone",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "phone",
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
        property: "stateProvider",
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
const filters={
    numFilter:0,
    textFilter:"",
    stateFilter:null,
    startDate:"",
    endDate:""
}
const getInputs={
    numFilter:0,
    textFilter:"",
    stateFilter:null,
    startDate:"",
    endDate:""
}

export const componentSettings={
    icProvider:IconsService.prototype.getIcon("icProvider"),
    searchOptions,
    menuItems,
    tableColumns,
    initialSort:"Id",
    initialSortDir:"desc",
    filters,
    getInputs,
    columnsFilter:tableColumns.map((column)=>{
        return{
            label:column.label,
            property:column.property,
            type:column.type
        }
    })
}