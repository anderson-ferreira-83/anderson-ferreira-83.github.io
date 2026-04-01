# 02 — Etapa: Queremos te conhecer melhor

Objetivo da etapa:
O recrutador quer confirmar elegibilidade, avaliar aderencia ao programa e entender quem voce e alem do curriculo.

Regra central:
Voce nao deve soar como "professor/pesquisador tentando migrar".
Voce deve soar como "profissional quantitativo com execucao aplicada em dados, ML e implementacao".

---

## O que esperar nessa etapa

A Gupy costuma combinar um ou mais dos seguintes formatos:

- **Campos de texto livre** — perguntas como "fale sobre voce", "por que esse programa", "como pode contribuir"
- **Teste de raciocinio logico ou quantitativo** — sequencias, porcentagens, interpretacao de tabelas/graficos
- **Questionario de perfil comportamental** — sem resposta certa/errada; avalia estilo de trabalho
- **Teste tecnico basico** — eventualmente questoes de Python, SQL ou estatistica para vagas de dados

Prepare-se para todos os formatos. Nao saia da etapa sem ter treinado os textos em voz alta.

---

## Postura ideal

- Segura — voce atende os criterios, nao precisa pedir permissao
- Objetiva — respostas diretas, sem rodeios academicos
- Aplicada — sempre conectar tecnica a resultado ou problema real
- Sem excesso de jargao — SMOTE e SHAP precisam de contexto breve quando aparecerem

---

## Textos prontos

### Versao ultracompacta (ate 300 caracteres — campos curtos da Gupy)

```
Doutorando na Unicamp, fase final. Atuo em dados, ML, cloud e estatistica. Projetos end-to-end com Python, SQL, FastAPI, Oracle, AWS, SMOTE e SHAP. Tecnicas transferiveis para analytics, risco e decisao orientada a dados.
```

### Versao curta (ate 500 caracteres)

```
Sou doutorando na Unicamp em fase final, com atuacao em Dados e Analytics, Machine Learning e IA, Cloud e Estatistica. Tenho experiencia em pipelines end-to-end, feature engineering, validacao de modelos e implementacao com FastAPI, Oracle e AWS. Venho aplicando essas competencias em projetos de IoT e saude, com tecnicas transferiveis para risco, fraude, churn e problemas de negocio orientados a dados.
```

### Versao forte (campo longo — "Fale sobre voce")

```
Sou doutorando na Unicamp, em fase final de formacao, com trajetoria que combina pesquisa aplicada, docencia e desenvolvimento de solucoes orientadas a dados. Minha atuacao reune Dados e Analytics, Machine Learning e IA, Cloud e Estatistica, com experiencia em projetos end-to-end, da preparacao dos dados a validacao e implementacao de modelos.

Nos projetos mais recentes, desenvolvi um pipeline IoT com ESP32, FastAPI e Oracle para classificacao de estados operacionais, alem de atuar como orientador e desenvolvedor em um projeto de predicao de risco com 4.240 amostras, utilizando SMOTE, validacao cruzada 5-fold, SHAP e analise de thresholds. Essas experiencias fortaleceram minha capacidade de estruturar dados, construir modelos preditivos, interpretar resultados e apoiar decisoes orientadas por evidencias.

Tambem atuo como professor em disciplinas de programacao, estrutura de dados e bancos de dados, o que ampliou minha capacidade de comunicar temas complexos com clareza e trabalhar de forma colaborativa.

Acredito que posso contribuir com o Itau em projetos de analytics, modelagem preditiva, experimentacao e resolucao de problemas de negocio com base em dados, unindo rigor analitico, execucao tecnica e alto potencial de adaptacao a diferentes contextos.
```

---

## Por que o programa / Por que o Itau

### Versao generica (campo "Por que esse programa")

```
Tenho interesse no programa porque ele conecta pesquisa aplicada a desafios reais de negocio. Quero contribuir com repertorio tecnico em dados, machine learning, estatistica e implementacao, ao mesmo tempo em que aproximo minha experiencia academica de contextos de alto impacto, escala e decisao. Vejo o Itau como um ambiente forte para transformar modelagem, analise e experimentacao em resultado concreto para areas de negocio.
```

### Versao especifica (se a pergunta for "Por que o Itau, e nao outro banco")

```
O Itau tem investido consistentemente em ciencia de dados, analytics avancada e modelos de risco e deteccao de anomalias em escala. O proprio programa de cientistas de dados do banco mostra que ha um caminho real de efetivacao para quem performa. Quero contribuir com rigor quantitativo e execucao tecnica em um ambiente que ja tem maturidade de dados — nao estou aqui para aprender o que e ML, estou aqui para aplicar o que ja sei em problemas de maior escala.
```

### Como posso contribuir

```
Posso contribuir em projetos que exijam estruturacao de dados, analise exploratoria, feature engineering, validacao de modelos, classificacao, deteccao de anomalias e implementacao de pipelines. Tenho experiencia com Python, SQL, FastAPI, Oracle, AWS, SMOTE, SHAP e validacao cruzada, alem de base quantitativa forte em estatistica e modelagem.
```

---

## Preparacao para testes tecnicos

Se aparecer um teste tecnico, as areas mais provaveis para vagas de dados sao:

### Raciocinio quantitativo (logica e matematica)

Treine:
- Porcentagem e variacao relativa: `variacao = (novo - antigo) / antigo * 100`
- Interpretacao de tabelas e graficos com dados numericos
- Sequencias numericas com logica simples
- Proporcionalidade e regra de tres
- Probabilidade basica: P(A e B), P(A ou B), P(A|B)

Exemplo tipico:
> Um modelo identificou 80 de 100 fraudes reais. De 50 alertas emitidos, 40 eram fraudes verdadeiras. Qual o Recall e a Precisao?
> Recall = 80/100 = 80%. Precisao = 40/50 = 80%.

### Estatistica basica

Conceitos que podem aparecer:
- Media, mediana, desvio padrao, variancia
- Distribuicao normal, assimetria, curtose
- Correlacao de Pearson vs Spearman
- Intervalo de confianca e p-valor
- O que significa overfitting e como detectar
- Diferenca entre validacao cruzada e holdout

### Python basico (se houver teste de codigo)

Operacoes mais cobradas:
```python
# Filtrar dataframe
df[df['coluna'] > valor]

# Agrupar e agregar
df.groupby('categoria')['valor'].mean()

# Tratar nulos
df['coluna'].fillna(df['coluna'].median())

# Ordenar e rankear
df.sort_values('coluna', ascending=False).head(10)

# Contar valores unicos
df['coluna'].value_counts()
```

### SQL basico (se houver questao de banco)

```sql
-- Agregacao com filtro
SELECT categoria, COUNT(*), AVG(valor)
FROM tabela
WHERE status = 'ativo'
GROUP BY categoria
HAVING COUNT(*) > 10
ORDER BY AVG(valor) DESC;

-- JOIN simples
SELECT a.id, a.nome, b.valor
FROM clientes a
JOIN transacoes b ON a.id = b.cliente_id
WHERE b.data >= '2025-01-01';

-- Subquery
SELECT *
FROM clientes
WHERE id IN (
  SELECT cliente_id FROM transacoes WHERE valor > 1000
);
```

### Questionario comportamental (sem certo ou errado)

Nao ha resposta a preparar. Seja consistente com a postura definida:
- Voce prefere trabalhar com dados concretos antes de decidir
- Voce aprendeu bem em ambientes novos no passado
- Voce consegue explicar coisas complexas com clareza
- Voce busca entender o problema antes de ir para a solucao

---

## O que evitar nessa etapa

- Abrir falando de vibroacustica, termodinamica ou fisica antes de dados
- Falar de docencia sem conectar a programacao, dados ou comunicacao
- Soar como alguem que quer "uma oportunidade para aprender do zero"
- Respostas longas com jargao tecnico sem explicar o contexto

---

## Frases seguras

- "Minha atuacao reune dados, modelagem e implementacao."
- "Tenho experiencia em projetos end-to-end."
- "Consigo transferir tecnicas entre dominios."
- "Meu foco e transformar repertorio tecnico em aplicacao."
