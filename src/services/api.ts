import axios from "axios";


const api = axios.create( {
    baseURL: "https://www.dbooks.org/api/"
})

export type IBookList = { 
    id:string
    title : string
    subtitle : string
    authors : string
    image : string
    url : string
}

export type IBookService = {
   total : number
   books : IBookList[]
}



export const  apiBookService = (value:string )=> (api.get<IBookService>(value))
