# Automação de testes com Cypress
Projeto com foco no desenvolvimento de cenários de testes automatizados utilizando Cypress.

# Softwares necessários para execução
É necessário que você possua o [NodeJS](https://nodejs.org/en) e [GIT](https://git-scm.com/downloads) instalados em sua máquina.

# Executando os testes
Com a máquina pronta, você deve clonar o repositório, abrir o mesmo no git e executar o comando:
```bash
  npm install
```

Com as dependências instaladas, os testes são executados com o comando:
```bash
  npx cypress run
```

Após a execução, é exibido um relatório com os testes executados:
<img width="704" height="206" alt="image" src="https://github.com/user-attachments/assets/ca78c674-d7d4-43fd-a249-c0b025c51caa" />


# Esteira de Integração Contínua
Caso possua um maior conhecimento com esteiras de integração contínua é possível executar os testes já desenvolvidos utilizando o Github Actions configurado neste repositório. Realize um [fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) do projeto e execute os testes automatizados via Github Actions.
