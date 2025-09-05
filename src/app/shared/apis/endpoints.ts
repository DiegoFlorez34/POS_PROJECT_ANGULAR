import { HttpHeaders } from "@angular/common/http"

export const endpoint={
    //CATEGORUY MODULE

    LIST_CATEGORIES:'Category',
    LIST_SELEC_CATEGORIES:'Category/Select',
    CATEGORY_BY_ID:'Category/',
    CATEGORY_REGISTER:'Category/Register/',
    CATEGORY_EDIT:'Category/Edit/',
    CATEGORY_REMOVE:'Category/Remove/',

    //AUTH_MODULE
    GENERATE_TOKEN:'User/Generate/Token',

    LOGIN_GOOGLE:'Auth/LoginWithGoogle'
}


export const httpOptions = {
    headers:new HttpHeaders({
        "Content-Type":"application/json"
    })
}