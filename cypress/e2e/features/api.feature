Feature: Consulta de dados via API

    Scenario: Consultar dados de uma ação do trello via GET
        When eu enviar uma requisição GET para o endpoint "/1/actions/592f11060f95a3d3d46a987a"
        Then o status code da resposta deve ser "200"
        And o campo name deve estar presente na estrutura list