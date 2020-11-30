export class Feature {
    constructor(){
        this.productArea = "Policies";
        this.client = "Client A";
    }
    id?:number;
    title?:string;
    description?:string;
    client?:string;
    clientPriority?:number;
    targetDate?:Date;
    productArea?:string;
}
