
# Projeto: Lista de Tarefas Simples

Este é um projeto básico de uma **Lista de Tarefas** desenvolvido com **HTML, CSS e JavaScript puro**, sem o uso de bibliotecas ou frameworks externos. O objetivo principal é permitir ao usuário adicionar, editar e excluir tarefas em uma interface simples e intuitiva.

## 📌 Funcionalidades

- ✅ Adicionar novas tarefas
- ✅ Listar todas as tarefas salvas
- ✅ Editar tarefas existentes
- ✅ Excluir tarefas
- ✅ Atualização dinâmica da lista sem recarregar a página

## 🛠️ Tecnologias Utilizadas

- **HTML5:** estrutura básica da página
- **CSS3:** para uma estilização simples (pode ser incrementado futuramente)
- **JavaScript (Vanilla JS):** manipulação do DOM, eventos e lógica de negócios

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Abra o arquivo **index.html** diretamente no navegador.

## 🎯 Desafios Enfrentados

Durante o desenvolvimento deste projeto, enfrentei alguns desafios que são comuns para iniciantes e que me ajudaram a consolidar conceitos importantes:

- **Manipulação do DOM:** Criar e atualizar dinamicamente os elementos HTML com JavaScript foi um dos principais aprendizados. Precisei entender como criar elementos, inserir HTML dentro deles e adicioná-los à página.
- **Eventos e Escopos:** Tive que aprender como associar funções a eventos (como o clique do botão) e garantir que as funções de editar e excluir pudessem acessar o índice correto da tarefa.
- **Validação de Entrada:** Para evitar o cadastro de tarefas vazias ou com apenas espaços, implementei uma validação simples com `trim()` para limpar os espaços em branco.
- **Funções Globais:** Como os botões de editar e excluir são criados dinamicamente, precisei declarar as funções como propriedades do objeto `window` para que pudessem ser chamadas diretamente pelo HTML inserido via `innerHTML`.

Esses desafios me ajudaram a melhorar minhas habilidades de **lógica de programação, manipulação de eventos e estruturação de código em JavaScript**.

## 💡 O Que Eu Poderia Melhorar

- Implementar **persistência de dados** com **Local Storage**, para que as tarefas continuem salvas mesmo ao atualizar a página.
- Melhorar o **design e a usabilidade** com CSS avançado ou frameworks como **Bootstrap**.
- Refatorar o código para separar melhor as responsabilidades entre manipulação de dados e de interface.
- Utilizar frameworks como **React** para criar componentes reutilizáveis e aprimorar a experiência.

## 👨‍💻 Aprendizados

Este projeto me proporcionou um entendimento prático de conceitos fundamentais como:
- Manipulação de arrays no JavaScript
- Criação e remoção de elementos no DOM
- Boas práticas ao nomear funções e variáveis
- Importância de manter o código limpo e organizado
- 
## 🔗 Visualizar a página do projeto

[Clique aqui para acessar o projeto no GitHub Pages](https://carlos-alexandre-leutz.github.io/primeiro-projeto-javascript/)


## 📚 Próximos Passos

- [ ] Adicionar Local Storage
- [ ] Aplicar um design mais moderno
- [ ] Criar filtros para listar tarefas concluídas ou pendentes
- [ ] Adicionar animações para transições de edição e exclusão

---

> **Nota:** Esse projeto é ideal para demonstrar habilidades iniciais em JavaScript puro e manipulação do DOM, algo muito valorizado por recrutadores ao avaliar o entendimento prático de um candidato em relação à programação front-end.
