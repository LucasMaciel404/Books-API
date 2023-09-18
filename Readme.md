# O que é o Books-API?
Esta **Rest-API** tem o intuito de ser a principal API de conexão com o banco de dados do "Books-front" que ainda esta em processo criativo para ser iniciado. Ambos os projetos serão projetos pessoais com intuito de colocar meu aprendizado em pratica.

# Como iniciar 
O que é preciso para execusão? </br>
--> Versão utilizada do **Ñode.js** : v18.16.0</br>
--> Além do **Node.js** você precisa de algumas depedencias, sendo elas o ``` cors ``` e o ``` express ```.</br>
``` 
    $ npm i cors
    $ npm i express 
```
# Rotas:

## GET: 
``` 
/books
```
Esta requisição do tipo **GET** retorna ao usuario todos os livros cadastrados no banco de dados.

## GET: 
``` 
/books/${id}
```
Esta requisição do tipo **GET** retorna ao usuario o livro que tenha o id igual ao informado na url.
## POST: 
``` 
/books
```
Esta requisição do tipo **POST** adicionar um livro ao banco de dados.

exemplo do corpo da requisição:
``` 
[
    {
        "id": 3,
        "name": "Cem Anos de Solidão",
        "author": "Gabriel García Márquez",
        "createDate": "1967",
        "stars": 4.7,
        "src": "https://m.media-amazon.com/images/I/515cVYLIP9L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        "price": 8.99,
        "stock": 12,
        "views": 8,
        "category": [
            "Ficção"
        ]
    }, ...
]
```
Desta forma podemos enviar um array com objetos possibilitando adicionar varios livros ao banco de dados. 
*obs: cada objeto do array representa um livro no banco de dados.* 
## PATCH: 
``` 
/books/${id}
```
Esta requisição do tipo **POST** edita um livro já existente no banco de dados.

exemplo do corpo da requisição:
``` 
     {
     "stock": 30,
     "views": 50
     }
```
Desta forma podemos mandar apenas um objeto com os itens que desejamos modificar.
## DELETE:
``` 
/books/${id}
```
esta requisição do tipo **DELETE** possibilita deletar um livro que tenha o id informado na url.
