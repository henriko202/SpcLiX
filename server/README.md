# Documentação

A documentação do backend estará disponível em: https://spclix.onrender.com/api/docs. Como o projeto está hospedado em um plano gratuito, pode ser que demore alguns muitos segundos para o servidor responder.

Ou caso esteja executando o projeto localmente, a documentação estará disponível por padrão em: http://localhost:5000/api/docs

## Arquitetura

A arquitetura é baseada em [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

Camadas:

- **external**: Contém os adaptadores externos da aplicação, que são os responsáveis por se comunicar com serviços externos, como banco de dados, API's, etc. Que seria a camada de Frameworks e Drivers do Clean Architecture.

- **main**: Contém as configurações da aplicação, inicialização de rotas, injeção de dependências, etc.

- **presentation**: Contém os controladores da aplicação, que são os responsáveis por receber as requisições HTTP e retornar as respostas HTTP. Que seria a camada de Interface do Clean Architecture.

- **use-cases**: Contém os casos de uso da aplicação, que são as regras de negócio.

- **entities**: Contém as entidades da aplicação, que são os objetos de negócio.

## Executando o projeto

Inicialmente é necessário instalar as dependências do projeto:

```bash
npm install
```

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

### Variáveis de ambiente

Temos as variáveis de ambiente `PORT`, `HOST` e `ENVIRONMENT`, todas definidas no arquivo `.env.example`.

É necessário definir essas variáveis dentro de um arquivo `.env` na raiz do projeto.
