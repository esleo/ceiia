# CEiiA Cypress Tests

Este repositório contém os testes automatizados do site [CEiiA](https://www.ceiia.com/) usando **Cypress**.  

Ele inclui:

- Testes de **links internos e externos**
- Testes do **formulário de contato**
- Testes de **UI e validação**
- Testes de **acessibilidade**
- Configuração de **ESLint + Husky + lint-staged** para manter qualidade do código e hooks de pré-commit

---

## Pré-requisitos

Antes de instalar e rodar os testes, você precisa ter instalado:

- [Node.js](https://nodejs.org/) v24 ou superior  
- [npm](https://www.npmjs.com/) v11 ou superior  
- [Git](https://git-scm.com/)  

> O projeto utiliza Husky para hooks de pré-commit e ESLint para validação de código.

---

## Clonando o projeto

```bash
git clone https://github.com/esleo/ceiia.git
cd ceiia
```

---

## Instalação

```bash
npm install
```

---

## Configuração opcional

O Cypress pode usar uma variável de ambiente para a URL base do site:

```bash
export CYPRESS_BASE_URL=https://www.ceiia.com
```

---

## Execução dos testes

```bash
npx cypress run
```

## Relatório de Testes Automatizados

| Funcionalidade        | Status         | Observações |
|:----------------------|:---------------|:------------|
| Menu                  | ⚠️ Atenção     | A opção de alternar idiomas não está visível ao usuário |
| Home Page/Slider      | ✅ OK          | |
| Home Page/Mercados    | ✅ OK          | |
| Contato/Formulário    | ✅ OK          | |
| Links Internos        | ✅ OK          | |
| Links Externos        | ⚠️ Atenção     | Links quebrados em /aeronautics, /about-us e /partners |
| a11y                  | ❌ Falha       | Falta de conformidade com a WCAG 4.1. Detectados erros de impacto severo e crítico |

O site institucional do CEiiA tem como principal finalidade disponibilizar informações acerca do trabalho desenvolvido pelo centro. Por esta razão, a maioria dos recursos existentes são apenas textos e imagens distribuídos em diversas páginas. Portanto, a principal ação do usuário é clicar nos links que o redireciona para o conteúdo desejado. Logo, os testes automatizados foram centrados em verificar a integralidade do fluxo de alternância entre páginas. Tratando-se de uma primeira automatização, o objetivo é cobrir os recursos considerados pouco práticos de se testar manualmente em uma análise exploratória, entre os quais: recursos de acessibilidade, diferentes estados de comportamento no formulário de contato e a integridade de dezenas de links. Nenhum erro de alto impacto foi identificado.

Com o tempo limitado, optou-se por testar recursos chave, como o menu principal por ser um elemento compartilhado entre todas as páginas. Nos testes, observou-se que o seletor de idiomas não está visível ao usuário (o código da funcionalidade se encontra comentando no HTML do site). Na página inicial, testou-se os sliders e a seção em que se destacam os mercados. Ambos funcionam corretamente. O formulário de contato também funciona corretamente, assim como a lista da página de notícias. Ao se verificar os links, constatou-se que a URL de alguns dos parceiros da CEiiA não funciona. Os testes de acessibilidade foram orientados apenas para garantir a conformidade com as diretrizes do WCAG 4.1, motivo pelo qual foram avaliados as falhas de impacto crítico ("critical") e sério ("serious"), descartando-se aquelas de menor impacto para evitar uma identificação excessiva de falhas de baixa relevância. Neste sentido, encontraram-se um erro de impacto crítico (button-name: botão com texto ilegível) e dois de impacto sério (color-contrast: contraste de cores insuficiente; link-name: links com texto ilegível). A limitação do tempo não permitiu exaustivamente outras páginas do site, sendo escolhida apenas a inicial por ser a principal. 

Para futuros testes, recomenda-se:

- melhorias no código para torná-lo mais dinâmico e potencializar o reuso
- estruturar novos page objects para ampliar a cobertura dos testes
- criação de novos cenários nas funcionalidades já testadas
- integrar uma ferramenta BDD para melhorar o entendimento dos testes, bem como compartilhá-lo para diferentes equipas interessadas
- verificar a integridade das imagens
- expandir o teste de acessibilidade para as outras páginas
