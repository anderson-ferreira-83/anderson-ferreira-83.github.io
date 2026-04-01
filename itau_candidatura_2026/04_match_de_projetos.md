# 04 — Etapa: Match de Projetos

Objetivo da etapa:
Conversar com o gestor da area e demonstrar aplicabilidade imediata.
O gestor precisa sair da conversa pensando: "esse cara entrega — nao preciso ensiná-lo do zero."

Regra central:
Dados -> modelagem -> validacao -> implementacao -> decisao.
Tudo que voce falar precisa terminar nessa logica.

---

## O que esperar nessa etapa

- Conversa com gestor ou lider tecnico da area (30 a 60 minutos)
- Perguntas sobre trajetoria, projetos e postura
- Perguntas situacionais ("me conta uma vez que...", "o que voce faria se...")
- Possivelmente um caso curto para resolver na hora ou discutir a abordagem
- Perguntas sobre sua escolha de projeto e por que voce acredita que encaixa

---

## Postura ideal

- Sem pedir permissao para estar ali — voce foi selecionado para essa conversa
- Sem tentar parecer especialista em banco — ninguem espera isso
- Sem se diminuir por nao vir de Computacao ou do setor financeiro
- Direto ao ponto — respostas concisas com exemplos reais

---

## Pitch de 30 segundos

```
Sou doutorando na UNICAMP em fase final, com atuacao aplicada em dados, machine learning, cloud e estatistica. Tenho experiencia em projetos end-to-end com Python, SQL, FastAPI, Oracle, AWS, SMOTE, SHAP e validacao de modelos, aplicando essas tecnicas em IoT e saude, com potencial de transferencia para analytics, risco e problemas de negocio orientados por dados.
```

## Pitch de 60 segundos

```
Sou doutorando na UNICAMP em fase final de formacao e atuo em dados, analytics, machine learning, cloud e estatistica. Nos meus projetos recentes, desenvolvi um pipeline IoT com ESP32, FastAPI e Oracle para classificacao de estados operacionais, e atuei como orientador e desenvolvedor em um projeto de predicao de risco com 4.240 amostras, utilizando SMOTE, validacao cruzada 5-fold, SHAP e analise de thresholds. Quero levar esse repertorio tecnico para problemas de negocio em escala, especialmente em contextos orientados a dados, risco e analytics.
```

---

## Perguntas provaveis e respostas

### 1. Fale sobre voce.

```
Sou doutorando na UNICAMP, em fase final de formacao, com trajetoria que combina pesquisa aplicada, docencia e desenvolvimento de solucoes orientadas a dados. Minha atuacao reune dados, machine learning, cloud e estatistica, com experiencia em projetos end-to-end, da estruturacao dos dados a validacao e implementacao de modelos. Hoje me vejo como um perfil quantitativo com capacidade de execucao, pronto para aplicar esse repertorio em desafios de negocio em escala.
```

### 2. Por que voce quer participar desse programa?

```
Porque o programa conecta profundidade tecnica a desafios reais de negocio. Quero atuar em um ambiente em que modelagem, analise e experimentacao tenham impacto concreto. O proprio formato do programa — com possibilidade de efetivacao e acesso ao programa de cientistas de dados — mostra que o Itau investe em quem performa. Quero estar nesse contexto.
```

### 3. Por que o Itau deveria apostar em voce?

```
Porque combino base quantitativa forte com execucao aplicada. Tenho experiencia em estruturacao de dados, modelagem preditiva, validacao estatistica e implementacao, e consigo transferir tecnicas entre dominios. Meu diferencial nao e apenas entender o modelo — e conseguir conectar dado, metodo e aplicacao em projetos reais.
```

### 4. Voce nao vem de banco. Como enxerga isso?

```
Minha experiencia nao vem do setor bancario, mas as tecnicas que aplico sao diretamente transferiveis. Ja trabalhei com classificacao, classes desbalanceadas, validacao, interpretabilidade e deteccao de padroes em dados — o que se aplica diretamente a risco, fraude, churn e scoring. O dominio de negocio muda; a base tecnica e a logica analitica se transferem bem.
```

### 5. Voce nao tem formacao em Computacao. Isso te prejudica?

```
Nao vejo dessa forma. Minha base e quantitativa e aplicada. Ao longo da trajetoria consolidei programacao, bancos de dados, modelagem e machine learning em projetos concretos. Minha formacao me deu rigor analitico; minha pratica me levou a implementar solucoes com Python, SQL, FastAPI, Oracle e AWS.
```

### 6. Qual projeto seu mais se conecta com o Itau?

```
O projeto de predicao de risco com SMOTE e o melhor exemplo. Trabalhei com base desbalanceada, split estratificado, validacao cruzada 5-fold, interpretabilidade com SHAP e metricas como Recall, F2-score e AUC-ROC. A logica tecnica e muito proxima de problemas como fraude, churn e credit scoring — onde classe rara e decisao sensivel importam bastante.
```

### 7. Conte um exemplo de projeto end-to-end.

```
Desenvolvi um pipeline IoT com ESP32, MPU6050, FastAPI e Oracle para classificacao de 7 estados operacionais. Atuei desde a coleta e estruturacao dos dados ate a engenharia de atributos, selecao de features e classificacao. O projeto acumulou mais de 210 mil registros em runs documentadas e mostrou minha capacidade de ir do dado bruto ate o modelo aplicado.
```

### 8. Como voce lida com aprendizado em um dominio novo?

```
Minha base e estruturada em modelagem, estatistica, programacao e validacao — isso me permite aprender rapido em qualquer dominio. Quando entro em um contexto novo, começo entendendo o problema de negocio, depois traduzo isso para dados, metricas e hipoteses testaveis. Foi assim que transitei entre pesquisa, IoT e saude aplicada.
```

### 9. Como voce trabalha em equipe?

```
A docencia e a orientacao de projetos fortaleceram muito minha comunicacao e minha capacidade de explicar temas complexos com clareza. Gosto de estruturar o problema, alinhar expectativas, tornar a analise transparente e colaborar com pessoas de perfis diferentes. Vejo isso como vantagem em ambientes multidisciplinares como o do Itau.
```

### 10. Qual sua principal lacuna hoje?

```
Minha principal lacuna e nao ter atuado diretamente no setor bancario. Ao mesmo tempo, vejo isso como uma distancia de dominio, nao de capacidade tecnica. O que ja construi em dados, modelagem, validacao e implementacao me deixa em boa posicao para aprender o contexto rapidamente e contribuir com consistencia desde o inicio.
```

### 11. Me conta uma dificuldade tecnica que voce enfrentou e como resolveu.

```
No projeto de predicao de risco de hipertensao, o principal desafio foi o desbalanceamento severo das classes — a minoria representava menos de 20% dos dados. Minha primeira abordagem foi aplicar SMOTE diretamente no dataset completo, o que gerou leakage de informacao entre treino e validacao e inflou artificialmente as metricas. Percebi o problema ao notar que os resultados em validacao cruzada eram inconsistentes com o holdout. Corrigi aplicando SMOTE apenas dentro de cada fold do treino, o que estabilizou as metricas e tornou a avaliacao mais crivel. Essa experiencia me ensinou que metrica alta sem processo correto nao vale nada.
```

### 12. O que voce faria diferente em algum projeto passado?

```
No pipeline IoT, comecei a estruturar a base de dados antes de definir formalmente quais perguntas queria responder com ela. Isso me fez regravar parte da coleta quando percebemos que algumas variaveis importantes nao estavam sendo capturadas. Hoje comecaria sempre pela definicao do problema e das hipoteses antes de qualquer coleta ou engenharia de atributos.
```

### 13. Como voce priorizaria tarefas em um projeto com prazo curto?

```
Mapearia primeiro quais entregaveis tem impacto direto na decisao do negocio e priorizaria esses. Depois identificaria dependencias tecnicas — o que bloqueia o que. Prefiro entregar uma analise robusta e bem validada do que cinco analises superficiais. Em projetos de ML, especificamente, um modelo simples bem avaliado vale mais do que um modelo complexo sem validacao adequada.
```

---

## Historias STAR completas

Formato: Situacao — Tarefa — Acao — Resultado

### STAR 1 — Projeto de risco com dados desbalanceados (mais transferivel para banco)

**Situacao:**
Atuei em um projeto de predicao de risco de hipertensao com 4.240 amostras e forte desbalanceamento entre classes positivas e negativas.

**Tarefa:**
Construir um modelo preditivo confiavel que priorizasse a deteccao correta dos casos de risco, sem inflar metricas artificialmente.

**Acao:**
Estruturei o pipeline com split estratificado, apliquei SMOTE apenas dentro de cada fold do treino para evitar leakage, usei validacao cruzada 5-fold, avaliei o modelo com Recall, F2-score, AUC-ROC e analisei thresholds para decisao clinica. Adicionei SHAP para interpretabilidade e identificacao das variaveis mais importantes.

**Resultado:**
Modelo com desempenho consistente entre validacao cruzada e holdout, interpretabilidade clara e base para suporte a decisao clinica. A metodologia e diretamente aplicavel a cenarios de fraude, churn e credit scoring.

---

### STAR 2 — Pipeline IoT end-to-end (demonstra execucao completa)

**Situacao:**
Precisei classificar 7 estados operacionais de um equipamento a partir de dados de vibracoes coletados por sensores.

**Tarefa:**
Construir um sistema completo de coleta, estruturacao e classificacao dos dados, integrando hardware, software e banco de dados.

**Acao:**
Desenvolvi pipeline com ESP32, MPU6050, FastAPI e Oracle. Estruturei a coleta dos dados, realizei engenharia de atributos expandindo de 104 features candidatas para 16 finais, treinei Random Forest com 200 arvores e documentei mais de 210 mil registros em runs rastreadas.

**Resultado:**
Acuracia de 97,34% em validacao cruzada e 94,24% em holdout. Sistema funcionando de ponta a ponta, do sensor ao modelo.

---

### STAR 3 — Comunicacao tecnica com publico nao tecnico (docencia como vantagem)

**Situacao:**
Em disciplinas de estatistica, precisava ensinar testes de hipotese, regressao e inferencia para alunos sem base matematica forte.

**Tarefa:**
Tornar conceitos quantitativos complexos acessiveis e aplicaveis para alunos de diferentes perfis.

**Acao:**
Desenvolvi material com exemplos concretos baseados em dados reais, conduzi atividades praticas com Python e orientei os alunos na interpretacao dos resultados — nao apenas na execucao do codigo.

**Resultado:**
Alunos conseguiam interpretar p-valor, intervalo de confianca e correlacao de forma aplicada. Essa pratica fortaleceu minha capacidade de comunicar analises para publico nao tecnico, o que e essencial em ambientes multidisciplinares como o do Itau.

---

### STAR 4 — Aprendizado rapido em dominio novo (adaptabilidade)

**Situacao:**
Precisei implementar uma arquitetura de deploy na AWS para um projeto de dados, sem experiencia previa com servicos de cloud.

**Tarefa:**
Estruturar e implementar a arquitetura de forma autonoma, dentro do cronograma do projeto.

**Acao:**
Estudei a documentacao da AWS, protipei a arquitetura com S3, Lambda, API Gateway e CloudFront, testei localmente e fiz o deploy incremental validando cada componente antes de integrar ao proximo.

**Resultado:**
Arquitetura implementada e funcional dentro do prazo. Aprendi os servicos principais da AWS de forma aplicada, o que resultou na certificacao AWS Certified AI Practitioner logo depois.

---

### STAR 5 — Deteccao de erro metodologico e correcao (rigor analitico)

**Situacao:**
Durante avaliacao de modelos no projeto de hipertensao, percebi inconsistencia entre metricas em validacao cruzada e holdout — o modelo parecia muito melhor no treino do que no dado nao visto.

**Tarefa:**
Identificar a causa raiz da inconsistencia e corrigir o pipeline sem comprometer os resultados ja obtidos.

**Acao:**
Revi cada etapa do pipeline e identifiquei que o SMOTE estava sendo aplicado antes do split de validacao, causando leakage de informacao do conjunto de validacao para o treino. Reestruturei o pipeline para aplicar SMOTE apenas dentro de cada fold.

**Resultado:**
Metricas estabilizadas e congruentes entre validacao cruzada e holdout. O modelo ficou menos impressionante nos numeros, mas muito mais confiavel para uso real — o que e o que importa.

---

## Como responder a objecoes implicitas

**Se pensarem: "Ele nao vem de banco."**
```
Minha experiencia nao vem do setor bancario, mas as tecnicas que aplico em classificacao, validacao, explicabilidade e problemas desbalanceados sao diretamente transferiveis para analytics, risco e deteccao de anomalias.
```

**Se pensarem: "Ele nao e de Computacao."**
```
Minha base e quantitativa e aplicada. Ao longo da trajetoria, consolidei programacao, modelagem, bancos de dados e machine learning em projetos concretos.
```

**Se pensarem: "Ele parece academico demais."**
```
Minha formacao academica me deu rigor analitico, mas meu foco hoje esta em aplicar esse repertorio em problemas concretos, com dados, modelos, validacao e implementacao.
```

**Se pensarem: "90 dias e pouco para esse perfil contribuir."**
```
Minha experiencia em projetos end-to-end me permite entrar produtivo rapido. Nao preciso de meses para entender o ciclo de dados, modelagem e validacao — ja opero nesse ciclo. O que preciso aprender e o contexto de negocio, e isso aprendo rapido.
```

---

## Perguntas que voce pode fazer ao gestor

### Sobre o projeto
- Quais metricas ou resultados sao mais relevantes para essa frente?
- Como a area equilibra exploracao analitica com implementacao e entrega?
- Qual e o maior desafio tecnico do projeto hoje?

### Sobre o ambiente
- O que diferencia os perfis que mais performam nesse contexto?
- Como e a interacao entre a equipe de dados e as outras areas do banco?

### Sobre o programa
- Como o programa costuma avaliar o encaixe entre perfil tecnico e projeto?
- Qual e o caminho mais comum para efetivacao ao final dos 90 dias?

---

## Resposta de match — versao curta

```
Minha principal contribuicao e combinar profundidade quantitativa com capacidade de execucao. Tenho experiencia em estruturacao de dados, modelagem preditiva, validacao estatistica e implementacao de pipelines, e consigo transferir tecnicas aplicadas em IoT e saude para contextos de analytics, risco, fraude e decisao orientada por dados.
```

## Resposta de match — versao forte

```
Vejo meu melhor encaixe em projetos que precisem unir rigor analitico, modelagem e implementacao. Nos meus trabalhos recentes, atuei desde a estruturacao dos dados e engenharia de atributos ate a validacao e aplicacao dos modelos, usando Python, SQL, FastAPI, Oracle, AWS, SMOTE, SHAP e validacao cruzada.

Embora minha experiencia venha de contextos como IoT e saude, as tecnicas que utilizo sao diretamente transferiveis para desafios do Itau, como classificacao, deteccao de anomalias, priorizacao de risco e apoio a decisao. Meu diferencial esta em aprender rapido, adaptar metodos a novos dominios e transformar repertorio tecnico em entrega aplicada.
```

---

## Se perguntarem sobre metodologia agil

```
Tenho familiaridade teorica com Scrum: backlog, sprint planning, review e retrospectiva. Minha vivencia principal foi em contexto academico e de projeto, mas entendo a logica de ciclos iterativos, priorizacao de entregas e colaboracao multidisciplinar. Adapto-me bem a esse formato.
```

---

## Frases que aumentam sua nota

- "Tenho experiencia em projetos end-to-end."
- "Meu diferencial e combinar rigor analitico com capacidade de implementacao."
- "Consigo transferir tecnicas entre dominios."
- "Tenho base quantitativa forte e aprendizado rapido."
- "Meu foco e aplicacao orientada a dados e decisao."

## Frases que reduzem sua nota

- "Apesar de eu nao ser da area..."
- "Ainda nao tenho experiencia, mas quero aprender..."
- "Meu perfil e mais academico mesmo..."
- "Nunca trabalhei com isso diretamente..."
- "Nao tenho experiencia em banco."

---

## Erros a evitar

- Abrir a resposta falando de docencia, fisica ou pesquisa antes de dados
- Soar defensivo por nao vir de Computacao ou banco
- Tentar provar demais que "tambem sabe de tudo"
- Dar respostas longas e teoricas sem exemplo concreto
- Falar de hardware sem conectar ao dado e ao modelo

---

## Regra final

Nunca esconda o que voce ainda nao viveu.
Mas sempre traduza claramente o que ja sabe fazer para o contexto do Itau.
