var livro = /** @class */ (function () {
    function livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    livro.prototype.getAutor = function () {
        return this.autor;
    };
    livro.prototype.getAnoPublicacao = function () {
        return this.anoPublicacao;
    };
    return livro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getIdade = function () {
        return this.idade;
    };
    return Usuario;
}());
var biblioteca = /** @class */ (function () {
    function biblioteca() {
        this.acervo = [];
        this.usuarios = [];
    }
    biblioteca.prototype.adicionarLivro = function (l) {
        this.acervo.push(l);
    };
    biblioteca.prototype.adicionarUsuario = function (u) {
        this.usuarios.push(u);
    };
    biblioteca.prototype.emprestarLivro = function (l, u) {
        if ((this.acervo.some(function (liv) { return liv === l; })) && (this.usuarios.some(function (user) { return user === u; })))
            console.log("Emprestimo realizado com sucesso!");
        else
            console.log("Livros e/ou user não existem na biblioteca!");
    };
    return biblioteca;
}());
var livro1 = new livro("titulo a", "autor a", 1998);
var user1 = new Usuario("pedro", 20);
var user2 = new Usuario("pavs", 20);
var bib1 = new biblioteca();
bib1.adicionarLivro(livro1);
bib1.adicionarUsuario(user1);
bib1.emprestarLivro(livro1, user2);
