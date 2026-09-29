# RomanLearn

> Uma experiência mais acessível para aprender números romanos.

O **RomanLearn** é uma aplicação web educacional desenvolvida para facilitar o aprendizado de números romanos por meio de uma interface visual, explicações passo a passo e recursos de acessibilidade.

O projeto foi pensado especialmente para **pessoas com dislexia e para usuários que se beneficiam de uma experiência de aprendizagem mais estruturada**, utilizando diferentes formas de apresentar o mesmo conteúdo.

## Sobre o projeto

Em vez de simplesmente converter um número romano e mostrar o resultado, o RomanLearn busca explicar **como o resultado foi obtido**.

Por exemplo:

**XIV → 14**

A aplicação apresenta o raciocínio:

**X = 10**  
**I = 1**  
**V = 5**

Como I é menor que V:

**10 − 1 + 5 = 14**

Dessa forma, o usuário consegue acompanhar o processo e entender a regra utilizada.

## Recursos

- Conversão de números romanos para decimais
- Explicação passo a passo
- Análise individual dos símbolos
- Narração das explicações por voz
- Controle de tamanho do texto
- Modo de alto contraste
- Interface responsiva
- Exemplos práticos
- Navegação por etapas
- Interface com foco em legibilidade e organização visual

## Acessibilidade

A acessibilidade é uma parte central do projeto.

O RomanLearn utiliza recursos que podem facilitar a leitura e a compreensão do conteúdo, como:

- Fonte **Atkinson Hyperlegible**
- Espaçamento e organização visual simplificados
- Controle de tamanho do texto
- Alto contraste
- Narração por voz
- Conteúdo dividido em etapas menores
- Explicações objetivas e progressivas

Esses recursos não têm como objetivo tratar ou diagnosticar dislexia. A proposta é oferecer uma experiência de aprendizagem que possa ser mais confortável e acessível para diferentes usuários.

## Tecnologias

- Python
- Flask
- Jinja
- JavaScript
- HTML5
- CSS3

## Estrutura

```text
RomanLearn/
│
├── backend/
│   ├── main.py
│   └── conversor.py
│
├── frontend/
│   ├── static/
│   │   ├── css/
│   │   │   ├── style.css
│   │   │   ├── learning.css
│   │   │   └── responsive.css
│   │   │
│   │   └── js/
│   │       ├── learning.js
│   │       └── accessibility.js
│   │
│   └── templates/
│       ├── index.html
│       ├── converter.html
│       ├── learning.html
│       └── examples.html
│
└── README.md
```

## Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Mitsuo100/RomanLearn.git
```

### 2. Entre na pasta

```bash
cd RomanLearn
```

### 3. Instale o Flask

```bash
pip install flask
```

### 4. Execute a aplicação

```bash
cd backend
python main.py
```

### 5. Acesse no navegador

```text
http://127.0.0.1:5000
```

## Como funciona

O usuário insere um número romano no conversor.

A aplicação:

1. Recebe o número informado.
2. Identifica o valor de cada símbolo.
3. Compara símbolos consecutivos.
4. Determina quando deve ocorrer uma soma ou subtração.
5. Calcula o valor decimal.
6. Apresenta o resultado.
7. Explica o processo de conversão.
8. Permite ouvir a explicação por voz.

## Exemplos

| Romano | Decimal | Cálculo |
|---|---:|---|
| IV | 4 | 5 − 1 |
| IX | 9 | 10 − 1 |
| VI | 6 | 5 + 1 |
| XIV | 14 | 10 + 5 − 1 |
| XL | 40 | 50 − 10 |

## Objetivo

O projeto foi desenvolvido como uma forma de praticar desenvolvimento web com **Python e Flask**, explorando também conceitos de **JavaScript, acessibilidade e experiência do usuário**.

Mais do que criar um conversor, o objetivo foi transformar uma operação simples em uma experiência que **ensina o usuário a chegar à resposta**.

## Autor

**Pedro Mitsuo Risardi Nisiaymamoto**

Computer Science Student — FIAP

[GitHub](https://github.com/Mitsuo100)

## Licença

Este projeto está disponível para fins educacionais.
