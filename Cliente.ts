export class Cliente{
    private id:string;
    private number:number;

    constructor (Theid:string,Thenumber:number){
        this.id = Theid;
        this.number = Thenumber;
    }

    public getId():string{
        return this.id;
    }
    public setNumber(Theid:string):void{
        this.id = Theid;
    }

    public getNumber():number{
        return this.number;
    }
    public setNumber(Thenumber:number):void{
        this.number = Thenumber
    }
}