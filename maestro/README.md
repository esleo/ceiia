# Relatório de Testes Automatizados

**Responsável**: Leonardo Pinto     
**Data**: 12 de fevereiro de 2026 
**Dispositivo**: Samsung Galaxy S10E (One UI 4.1)

## Resumo

| Funcionalidade | Status         | Observações |
|:---------------|:---------------|:------------|
| Cadastro       | ⛔ Não testado | Esta funcionalidade não é viável de ser testada automatizadamente com os recursos disponíveis |
| Login          | ✅ OK          | |
| Atividades     | ✅ OK          | |

O plano de testes automatizados consistiu em verificar três funcionalidades: cadastro, login e atividades. Para cadastrar um usuário com sucesso, requere-se informar, na aplicação, o código recebido por SMS ao número de telefone informado previamente, isto é, necessita-se acessar um recurso externo à aplicação, e os recursos disponíveis não o permitem. Por esta razão, não foi possível testar o cadastro de maneira automatizada. Em login, não foram constatadas quaisquer anomalias, e tampouco em atividades. O resultado deste teste deve levar em consideração a quantidade de cenários testados: apenas três foram solicitados.

Durante o planeamento dos testes, constatou-se a falta de padronização no nome de objetos, que alternam entre camelCase e snake_case (por exemplo: stop_btn e btnEnd), além de nomes pouco descritivos. A ausência de padronização torna a leitura do código menos intuitiva e o processo de automatização dos testes humanamente mais custoso.

Para futuros testes, recomenda-se:

- integrar o Maestro a uma API (por exemplo Twilio) para tratar códigos recebidos por SMS ou e-mail
- incluir cenários de teste com requisitos negativos
- criar um plano de teste multiplataforma (iOS e Android)
- implementação de ferramentas de mock GPS ou a criação de perfis de teste com coordenadas geográficas pré-definidas para testar "train" e "bus"

## Cenários de Teste

**ID**: CT001    
**Cenário**: Cadastrar um novo usuário       
**Pré-condições**: endereço de e-mail, número de telefone e senha válidos  
**Procedimento**:   
1. abrir a aplicação   
2. arrastar a tela da direita para a esquerda três vezes    
3. tocar em "Skip"   
2. tocar em "Sign up here" 
3. preencher o formulário, com os campos "first name", "last name", "email, "phone number" e "password"   
4. tocar em "Next" 
5. tocar no botão referente aos termos e condições 
6. tocar em "Create Account"   
7. digitar o código recebido por SMS    
8. tocar em "Verify".   

**Resultado esperado**: uma mensagem de sucesso é exibida no ecrã   
**Resultado obtido**: comportamento conforme esperado
**Observação**: teste não implementado por não ser possível obter o código SMS automaticamente

**ID**: CT002    
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

**ID**: CT003    
**Cenário**: Registrar uma atividade      
**Pré-condições**: estar conectado na aplicação com a localização do telemóvel sempre ativa  
**Procedimento**:   
1. tocar em uma atividade qualquer: "bike", "subway", "bus", "train" ou "scooter" (selecionado "bike")
2. tocar em "Start"
3. tocar em "Finish"
4. tocar em "End"

**Resultado esperado**: mensagem de sucesso para atividade registrada 
**Resultado obtido**: comportamento conforme esperado   
**Observações**: as opções de atividade "subway" e "bus" apenas podem ser iniciadas se a localização do dispositivo corresponder a uma estação do modal correspondente