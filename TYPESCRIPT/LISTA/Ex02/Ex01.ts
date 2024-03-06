class Filme{
    private titulo:string;
    private genero:string;
    private duracao:number;

    constructor(titulo,genero,duracao){
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }

    public getTitulo() : string{
        return this.titulo;
    } 

    public getGenero() : string{
        return this.genero;
    }

    public getDuracao() : number{
        return this.duracao;
    }

}

class Cliente{
    private cliente:string;
    private idade:number;

    constructor(cliente,idade){
        this.cliente = cliente;
        this.idade = idade;
    }

    public getCliente() : string{
        return this.cliente;
    } 
    public getIdade() : number{
        return this.idade;
    } 
}

class Locacao{
    filmesAlugados: Filme[];
}