const formulario = document.getElementById("formulario-livro");
const button = document.getElementById('listar-livros');
let outputLivros = document.getElementById('lista-livros');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const nota = document.getElementById('nota').value;

    const dadosFilmes = { titulo, genero, nota };

    localStorage.setItem('livros', JSON.stringify(dadosFilmes));

    alert('Livro Salvo com sucesso!');
    
});

button.addEventListener('click', e => {
    e.preventDefault();

    const chaveSalva = localStorage.getItem('livros');
    const listaFilmes = JSON.parse(chaveSalva);
    
    outputLivros = document.createElement('li');

    listaFilmes.array.forEach(element => {

        let item = document.createElement('ul');
        item.innerHTML = `Titulo do livro: ${element.titulo}\nGenêro do Livro: ${element.genero}\nNota do Livro: ${element.nota}\n`;
        outputLivros.appendChild(item);
    });

});