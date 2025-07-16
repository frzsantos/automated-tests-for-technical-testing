Feature: Checkout

    Background:
        Given que existe um usuário cadastrado
        And que o usuário se autentique com sucesso

    Scenario: Realizar compra de um produto com sucesso
        Given que o usuário acessa a página de produtos
        When o usuário selecionar um produto aleatório
        And clicar no botão "Ver carrinho"
        Then o usuário deve ser redirecionado para a página "Meu carrinho"
        And o usuário deve ver o produto no carrinho
        When clicar no botão "Prosseguir para o checkout"
        Then o usuário deve ser redirecionado para a página "Checkout"
        And deve ver o resumo do pedido
        When clicar no botão "Fazer pedido"
        And o usuário preencher os dados de pagamento
        And clicar no botão "Pagar e confirmar pedido"
        Then o pedido deve ser realizado com sucesso