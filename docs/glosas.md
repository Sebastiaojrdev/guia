![Image](./imagens/logo.png)

# **Glosas de faturamento no SUS**

As glosas de faturamento no SUS ocorrem quando há inconsistências, erros ou falta de informações nos dados enviados para processamento. Quando o problema está relacionado ao Cartão Nacional de Saúde (CNS) do paciente ou ao Código Nacional de Estabelecimento de Saúde (CNES) da unidade prestadora, algumas glosas podem ser aplicadas.  

Veja os principais tipos:  
### **1. Glosas Relacionadas ao CNS (Cartão Nacional de Saúde):**  
Estas glosas ocorrem quando há erro ou inconsistência nas informações do paciente.  
•	CNS inválido ou inexistente → O número do CNS informado não é reconhecido no banco de dados do SUS.  
•	CNS não cadastrado no município → O paciente não tem vínculo com a localidade do atendimento.  
•	Divergência de dados do paciente → Nome, data de nascimento ou CPF informados não coincidem com o cadastro do CNS.  
•	CNS duplicado ou inativo → O número pode estar associado a mais de uma pessoa ou estar desativado.  
•	CNS de profissional de saúde → O número inserido pertence a um profissional e não a um paciente.

---
### **2. Glosas Relacionadas ao CNES (Código Nacional de Estabelecimento de Saúde):**  
Estas ocorrem quando há erros nos dados da unidade prestadora.  
•	CNES inválido ou inativo → A unidade de saúde informada não está cadastrada ou está desativada no sistema do SUS.  
•	CNES sem habilitação para o procedimento → A unidade não possui credenciamento para o serviço realizado.  
•	CNES informado diferente do registrado no atendimento → O código enviado não corresponde à unidade onde o atendimento foi prestado.  
•	CNES de outra esfera de gestão sem convênio → A unidade pertence a um município ou estado diferente e não há contrato para o atendimento.  

---
### **Como evitar essas glosas?**  
•	Verificar o CNS do paciente no sistema antes da realização do procedimento.  
•	Manter o CNES atualizado e revisar periodicamente as habilitações e credenciamentos.  
•	Treinar a equipe para o correto preenchimento dos dados nos sistemas de faturamento.  
