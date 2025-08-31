# 🏠 Controle de Domótica
## Visão Geral do Projeto
Este projeto é uma atividade da disciplina Programação para Internet II no IFPI, com o objetivo de desenvolver uma aplicação web que simula o gerenciamento inteligente de dispositivos em um ambiente residencial, incluindo controle de iluminação, climatização e automação de cenas personalizadas.

## Tecnologias Utilizadas
### Backend
- Node.js: Ambiente de execução JavaScript.
- Express.js: Framework para construção da API REST.
- PostgreSQL: Banco de dados relacional para persistência de dados.
- Sequelize: ORM (Mapeador Objeto-Relacional) para interagir com o banco de dados.
- Nodemon: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

### Frontend
- HTML: Estrutura da página web.
- CSS: Estilização da interface.
- JavaScript: Lógica de interação com o usuário e consumo da API do backend.

## Funcionalidades Principais
- O sistema permite o gerenciamento e controle de:
  - Casas: Entidade principal que contém os cômodos.
  - Cômodos: Ambientes como "Sala de Estar" ou "Cozinha".
  - Dispositivos: Itens controláveis dentro dos cômodos, como lâmpadas ou ventiladores. É possível alternar o estado de cada dispositivo entre ligado e desligado.
  - Cenas: Sequências de ações pré-definidas para dispositivos.

## Documentação e Recursos

### Documentação da API
A API REST está documentada usando **Swagger**, que fornece uma interface interativa para explorar os endpoints, parâmetros e respostas.
 
> A documentação do Swagger está disponível apenas enquanto o servidor estiver rodando localmente.

Durante o desenvolvimento, acesse: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### Design da Interface
O protótipo da interface do sistema foi criado no **Figma** e pode ser visualizado no link: [Design no Figma](https://www.figma.com/design/EXoKG9Tli2f0cVYV6AXkwN/Diagnostico?node-id=0-1&p=f)
    
## Equipe

- **[Luana](https://github.com/luanafleal)**  
- **[Sammya](https://github.com/samleticias)**
- **[Teresa](https://github.com/teresartf)**
