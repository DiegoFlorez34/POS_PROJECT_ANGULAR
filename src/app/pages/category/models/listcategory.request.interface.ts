import { convertDateToRequest } from "@shared/functions/helpers";
import { params } from "src/app/commons/params-api.interface";

export class List_Category_Request extends params{
    constructor(
        numpage:number,
        order: 'desc' | 'asc',
        sort: string,
        records: 10 | 20 | 50,
        numFilter: number = 0,
        textFilter: string="",
        stateFilter: number = null,
        private startdate: string,
        private enddate: string
    ){
        super(
            true,
            numpage,
            order,
            sort,
            records?? 10,
            false,
            numFilter,
            textFilter,
            stateFilter
        )
        this.startdate= convertDateToRequest(this.startdate,'date');
        this.enddate= convertDateToRequest(this.enddate,'date');
    
    
    }
}