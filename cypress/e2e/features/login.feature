Feature: Login

    Scenario: Realizar login com credenciais válidas
        Given que existe um usuário cadastrado
        And que o usuário acessa a página de login
        When o usuário preencher credenciais válidas
        And clicar no botão "Login"
        Then o login deve ser realizado com sucesso

    Scenario: Realizar login com credenciais inválidas
        Given que o usuário acessa a página de login
        When o usuário preencher credenciais inválidas
        And clicar no botão "Login"
        Then deve exibir uma mensagem de erro informando que as credenciais são inválidas

# Referente aos cenários de tentativa de login informando apenas e-mail ou senha,
# acabam sendo prejudicados pela forma que são feitas tais validações pelo front-end.
# O mesmo está usando os alertas nativos do navegador. Eles podem variar de acordo com
# o navegador utilizado e/ou idioma do sistema, ou seja, para automações que são executadas
# em esteiras de integração contínua que tais informações não são fixas, os testes podem
# reportar falsos negativos.