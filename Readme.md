# O que é o Books-API?
Esta **Rest-API** tem o intuito de ser a principal API de conexão com o banco de dados do "Books-front" que ainda esta em processo criativo para ser iniciado. Ambos os projetos serão projetos pessoais com intuito de colocar meu aprendizado em pratica.

# Como iniciar 
Antes de tudo você não nessecita usar a API localmente, pois eu a hospedei em um servidor gratuito da Render
para acessar a API e sua documentação acesse: https://booksapi-o7wo.onrender.com/doc


### O que é preciso para execusão de forma local? </br>
--> Versão utilizada do **Ñode.js** "no minimo": v18.16.0</br>
--> Além do **Node.js** você precisa de algumas depedencias, essas depedencias podem ser instaladas ao executar o comando npm install:
``` 
    // tente:
    npm i

    // ou 
    npm install
```
--> Faça um arquivo **".env"** passando as seguintes informações:
```

    DB_HOST = localhost // host do banco de dados 
    DB_USER = root // usuario do banco de dados
    DB_PASS = // senha do banco de dados 
    DB_NAME = MyBooks // nome do banco de dados
    DB_TYPE = mysql // o sequelize esta configurado para mysql || postgres
    DB_PORT = 3306 // mysql : 3306 | postegres : 5432 (geralmente estas são as portas padrão)

    SECRET_JWT = mySecretTokenJWT // Secret para criptogradia do JWT

```
após isso voce pode iniciar a API utilizando o comando:
O seu vsCode deve estar com o diretorio do terminal no mesmo diretorio do arquivo app.js 
```
    node app.js
```

Com a API rodando localmente você pode acessar a documentação em http://localhost:8000/doc
