# Relatório de Teste Exploratório

**Responsável**: Leonardo Pinto     
**Data**: 12 de fevereiro de 2026   
**Tempo de exploração**: 90 minutos     
**Dispositivo**: iPhone 13 (iOS 26.2.1)     
**Conectividade testada**: Wi-Fi, 5G e Modo Avião   
**Objetivo da Sessão**: Explorar os fluxos principais da aplicação AYR focando em:
- Criação e autenticação de conta
- Tratamento de erros de validação
- Comportamento da aplicação sem conectividade
- Experiência do usuário em ações críticas (logout, início de atividade)
- Análise do histórico

## Resumo

| Funcionalidade | Status      | Observações |
|:---------------|:------------|:------------|
| Cadastro       | ⚠️ Atenção | Validações funcionam corretamente, mas as mensagens de aviso não são exibidas no momento esperado |
| Login          | ✅ OK      | |
| Logout         | ✅ OK      | Nenhum problema encontrado, mas o fluxo pode ser melhorado para evitar logout acidental  |
| Atividades     | ⚠️ Atenção | O ponto que indica a localização do dispositivo no mapa se move demasiado, mesmo parado e com a localização exata ativada  |
| Histórico     | ⚠️ Atenção | Observou-se que alguns registros se mantém em "In validation" indefinidamente  |

A ausência de um documento de requisitos ou informações sobre as funcionalidades tornou dúbio ou inconclusivo o comportamento esperado de alguns recursos. Como exemplo, muitos registros estão no histórico com o status "In Validation", mas não é possível saber quais são as validações em curso, quanto tempo podem demorar ou se, de fato, estão a funcionar adequadamente. Da mesma maneira, o AYR Dots e o AYR Credits permaneceram sempre zerados, sendo desconhecidos os critérios de obtenção. Dentro destas limitações, a aplicação funcionou de maneira estável durante todo o período de testes, não sendo observados erros, porém sim falhas de usabilidade que geram expectativas e induzem o utilizador a ações errôneas. Estas falhas podem ser observadas, principalmente, no processo de cadastro com as mensagens de erro não são exibidas no momento da validação dos dados, apenas em etapas posteriores.

Por ser um primeiro teste, com período de tempo curto, optou-se por focar nas funcionalidades que se referem ao núcleo do produto, bem como aquelas que implicam em maior risco para a segurança do usuário e aplicação. Portanto, não foram considerados os jogos ou recursos meramente informativos e textuais. Para futuros testes, recomenda-se os seguintes pontos:

- disponibilização de uma documentação funcional
- deslocar-se em cada um dos cinco modais disponíveis
- ampliar a cobertura dos cenários testes para login, atividades, histórico e carteira
- testar perfil de usuário, jogos e notificações
- testar os modais 
- disponibilizar documentação e relatório de testes em ferramenta mais apropriada, que permitem melhor organização das informações

## Cenários de Teste

**ID**: CT001    
**Cenário**: Cadastrar um novo usuário       
**Pré-condições**: endereço de e-mail, número de telefone e senha válidos  
**Procedimento**:   
1. abrir a aplicação   
2. arrastar a tela da direita para a esquerda três vezes    
3. tocar em "Skip"   
4. tocar em "Sign up here" 
5. preencher o formulário, com os campos "first name", "last name", "email, "phone number" e "password"   
6. tocar em "Next" 
7. tocar no botão referente aos termos e condições 
8. tocar em "Create Account"   
9. digitar o código recebido por SMS    
10. tocar em "Verify".   

**Resultado esperado**: uma mensagem de sucesso é exibida no ecrã   
**Resultado obtido**: comportamento conforme esperado

**ID**: CT002    
**Cenário**: Cadastrar um novo usuário com telefone existente       
**Pré-condições**: número de telefone previamente cadastrado  
**Procedimento**:   
1. abrir a aplicação    
3. arrastar a tela da direita para a esquerda três vezes    
4. tocar em "Skip"  
5. clicar em "Sign up here" 
6. preencher formulário, com os campos "first name", "last name", "email, "phone number" (que deve estar cadastrado) e "password"   
7. tocar em "Next" 

**Resultado esperado**: uma mensagem de aviso deve ser exibida no ecrã após clicar em "Next"  
**Resultado obtido**: nenhuma mensagem foi exibida, e o fluxo do cadastro continuou até a última etapa, porém sem sucesso.  
**Observações**: a mensagem de aviso apenas será exibida se o usuário solicitar um novo código de SMS, isto é, exige-se que o usuário 


**ID**: CT003    
**Cenário**: Fazer login       
**Pré-condições**: ter um usuário previamente cadastrado e ativo  
**Procedimento**:   
1. abrir a aplicação    
2. arrastar a tela da direita para a esquerda três vezes    
3. tocar em "Skip"  
4. informar "phone number" e "password" 
5. tocar em "Enter" 

**Resultado esperado**: o usuário deve ser redirecionado à área restrita da aplicação  
**Resultado obtido**: comportamento conforme esperado  


**ID**: CT004    
**Cenário**: Fazer login com senha inválida      
**Pré-condições**: ter um usuário previamente cadastrado e ativo  
**Procedimento**:   
1. abrir a aplicação    
2. arrastar a tela da direita para a esquerda três vezes    
3. tocar em "Skip"  
4. informar "phone number" e "password" (que deve ser inválida)
5. tocar em "Enter" 

**Resultado esperado**: uma mensagem de aviso deve ser exibida no ecrã  
**Resultado obtido**: comportamento conforme esperado

**ID**: CT005    
**Cenário**: Fazer logout      
**Pré-condições**: estar conectado na aplicação  
**Procedimento**:   
1. tocar no menu hamburger, no canto superior esquerdo do ecrã
2. tocar em "Logout"

**Resultado esperado**: uma mensagem de aviso deve ser exibida no ecrã  
**Resultado obtido**: comportamento conforme esperado  
**Observações**: a funcionalidade é vulnerável a toques acidentais, uma vez que não se solicita a confirmação do usuário para se desconectar

**ID**: CT006    
**Cenário**: Abrir aplicação e iniciar em modo avião      
**Pré-condições**: estar conectado na aplicação e com o telemóvel em modo avião    
**Procedimento**:   
1. abrir a aplicação    
2. tocar em uma atividade qualquer: "bike", "subway", "bus", "train" ou "scooter" (selecionado "bike")
3. tocar em "Start"

**Resultado esperado**: ao abrir a aplicação, a funcionalidade "Activity" deve ser a única disponível, e o usuário deve ser capaz de iniciar qualquer atividade normalmente.   
**Resultado obtido**: comportamento conforme esperado

**ID**: CT007    
**Cenário**: Iniciar uma atividade com localização desativada      
**Pré-condições**: estar conectado na aplicação e com a permissão de localização do telemóvel negada  
**Procedimento**:   
1. tocar em uma atividade qualquer: "bike", "subway", "bus", "train" ou "scooter" (selecionado "scooter")
2. tocar em "Start"

**Resultado esperado**: a atividade não será iniciada, e uma mensagem com indicação às configurações do telemóvel deve ser exibida  
**Resultado obtido**: comportamento conforme esperado

**ID**: CT008    
**Cenário**: Iniciar uma atividade com localização ativa      
**Pré-condições**: estar conectado na aplicação com a localização do telemóvel sempre ativa  
**Procedimento**:   
1. tocar em uma atividade qualquer: "bike", "subway", "bus", "train" ou "scooter" (selecionado "bike")
2. tocar em "Start"

**Resultado esperado**: a atividade será iniciada instantaneamente  
**Resultado obtido**: comportamento conforme esperado   
**Observações**: as opções de atividade "subway" e "bus" apenas podem ser iniciadas se a localização do dispositivo corresponder a uma estação do modal correspondente

**ID**: CT009    
**Cenário**: Terminar uma atividade      
**Pré-condições**: estar conectado na aplicação com a localização do telemóvel sempre ativa  
**Procedimento**:   
1. executar os passos de CT008
3. tocar em "Finish"
4. tocar em "End"

**Resultado esperado**: a atividade será encerrada, e o utilizador se manterá no mesmo ecrã  
**Resultado obtido**: comportamento conforme esperado   
**Observações**: as opções de atividade "subway" e "bus" apenas podem ser iniciadas se a localização do dispositivo corresponder a uma estação do modal correspondente

**ID**: CT010    
**Cenário**: Verificar histórico da última atividade      
**Pré-condições**: estar conectado na aplicação com a localização do telemóvel sempre ativa  
**Procedimento**:   
1. executar os passos de CT009
3. tocar no menu hamburger, no canto superior esquerdo do ecrã
4. tocar em "History"

**Resultado esperado**: um registro com o modal selecionado (selecionado "bike"), com hora de início e hora de fim  
**Resultado obtido**: comportamento conforme esperado