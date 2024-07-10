# O que é o Books-API?
Esta **Rest-API** tem o intuito de ser a principal API de conexão com o banco de dados do "Books-front" que ainda esta em processo criativo para ser iniciado. Ambos os projetos serão projetos pessoais com intuito de colocar meu aprendizado em pratica.

### O que é preciso para execusão de forma local? </br>
--> Versão utilizada do **Ñode.js** "no minimo": v18.16.0</br>
--> Você vai precisar instalar e executar um servidor de codigo aberto como o Xampp:
--> Após a instalação voce vai dar "start" no "apache" e em "mysql"

<img align='start' src="https://upload.wikimedia.org/wikipedia/commons/d/de/XAMPP_Windows_10.PNG" width="500px"/>

--> Faça um arquivo **".env"** na raiz do projeto e passe as seguintes informações:

```

    DB_HOST = localhost // host do banco de dados 
    DB_USER = root // usuario do banco de dados
    DB_PASS = // senha do banco de dados 
    DB_NAME = MyBooks // nome do banco de dados
    DB_TYPE = mysql // o sequelize esta configurado para mysql || postgres
    DB_PORT = 3306 // mysql : 3306 | postegres : 5432 (geralmente estas são as portas padrão)

    SECRET_JWT = mySecretTokenJWT // Secret para criptogradia do JWT

```

--> Agora precisamos de algumas depedencias, essas depedencias podem ser instaladas ao executar o comando npm install na raiz do projeto:

``` 
    // tente:
    npm i

    // ou 
    npm install
```

após isso voce pode iniciar a API utilizando o comando na raiz do projeto  

```
    node app.js
```

Com a API rodando localmente você pode acessar a documentação em http://localhost:8000/doc
