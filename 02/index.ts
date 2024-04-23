const listaUsuarios = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const filtrarNome = (lista: { nome: string, idade: number, status: boolean }[],
    nome: string): { nome: string, idade: number, status: boolean }[] => {

    const resultado = lista.filter((usuario) => {
        return usuario.nome.toLowerCase().includes(nome.toLowerCase());
    });
    return resultado;
};

console.log(filtrarNome(listaUsuarios, "jo"));