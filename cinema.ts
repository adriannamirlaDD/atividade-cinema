export class Cinema{
    private lotacao: number;
    private cadeira: array<cliente<;

    public constructor(lotacao:number, cadeira:array<cliente>){
        this.lotacao=lotacao;
        this.cadeira=cadeira;

    }
    public getLotacao():number{
        return this.lotacao;
    }
    public setLotacao(lotacao:number):void{
        this.lotacao=lotacao;
    }
    public getCadeira():boolean{
        return this.cadeira;
    }
    public buscarCliente(id:string):number{
        let indice:number=0;
        }
    }
}