export interface Props{
    headerText:string;
    options:{key:string,value:string}[];
    handleChange?:(value:string)=>void
}
