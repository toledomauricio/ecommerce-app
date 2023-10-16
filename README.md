# Ecommerce App

Bem-vindo ao Ecommerce App, um projeto de comércio eletrônico incrível! Aqui estão as instruções para configurar, iniciar e configurar a parte do frontend deste aplicativo.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Se você ainda não os possui, você pode fazer o download em [Node.js](https://nodejs.org/).

Além disso, é recomendável ter o Yarn e o NestJS instalados globalmente. Você pode fazer isso com os seguintes comandos:

```bash
# Instale o Yarn globalmente (se ainda não estiver instalado)
npm install -g yarn

# Instale o NestJS globalmente (se ainda não estiver instalado)
npm install -g @nestjs/cli

# Instale as dependências do projeto
npm install ou yarn add
```

## Configuração Inicial
1. Clone este repositório para a sua máquina
2. Para rodar o projeto, utilize o seguinte comando:

```bash
yarn run start --watch
```
O servidor estará disponível em: `http://localhost:3000/`

## Configurando Migrations no Banco de Dados
O projeto utiliza Migrations do TypeORM para gerenciar o banco de dados. Siga estas etapas para configurar as migrações:

1. Crie o banco:
```bash
CREATE DATABASE defaultdb;
```

2. Rode as migrations para criar a tabela de produtos:
```bash
npx typeorm migration:run -d src/database/migrations/1697485647920-CreateProductsTable.ts
```

Isso criará a tabela de produtos automaticamente, desde que suas configurações de banco de dados sejam corretas.

Se preferir, crie manualmente:
```bash
CREATE TABLE products (
    id longtext PRIMARY KEY,
    name varchar(255),
    description text,
    price numeric,
    imageUrl: longtext,
);
```
## Seeds ( Inserindo dados iniciais )
Para adicionar dados iniciais (seeds) ao seu projeto, faça uma solicitação POST para o seguinte endpoint:

```bash
curl --location --request POST 'http://localhost:3000/products/seed'
```

Isso preencherá o banco de dados com dados de exemplo para que você possa começar a explorar e gerenciar os produtos de exemplo.

## Configurando o Frontend
1. Navegue até a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências do Frontend usando o npm:
```bash
npm install
```

3. Após a conclusão da instalação, inicie o projeto frontend com o seguinte comando:
```bash
npm run serve
```

O frontend estará disponível em: `http://localhost:8080/`

## Cobertura de Testes da API 🧪

Para garantir a qualidade e confiabilidade do código, foram criados alguns testes. Abaixo estão os principais testes de integração da API:

### Teste da `products.controller()`

- **Condição:** deve retornar produtos da segunda página
- **Descrição:** Este teste verifica se deve retornar produtos da segunda página.
- **Método:** `GET`

## Executando os Testes

Para executar os testes, você pode usar o seguinte comando dentro da pasta raízdo projeto:

```bash
yarn test
```

Agora você pode explorar e gerenciar seus produtos usando a interface frontend do Ecommerce App. Divirta-se! 😊
