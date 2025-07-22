👋 Olá! Eu sou Diego R. Pereira

Sou um profissional em formação com foco em Qualidade de Software e Testes Automatizados. Estou constantemente explorando ferramentas modernas de QA, como Cypress, Postman e Git, com projetos práticos que envolvem automação de testes E2E, testes de API REST e uso de CI/CD. Atualmente participo do curso da EBAC em Engenharia de Qualidade de Software, onde venho desenvolvendo projetos reais com aplicação de boas práticas, versionamento e documentação.


# 🧪 Projeto Final — TCC | Engenheiro de Qualidade de Software — EBAC

Repositório oficial do Trabalho de Conclusão de Curso da Formação Engenheiro de Qualidade de Software - EBAC.

## 🎯 Objetivo

Este projeto tem como objetivo aplicar os conhecimentos adquiridos durante a formação de QA para validar as funcionalidades do e-commerce [EBAC Shop](http://lojaebac.ebaconline.art.br/), utilizando técnicas e estratégias de testes, automação de testes (UI, API, Mobile), integração contínua e testes de performance.

Este projeto é o Trabalho de Conclusão de Curso (TCC) da formação Engenheiro de Qualidade de Software da EBAC. O objetivo é aplicar técnicas e ferramentas de QA para validar funcionalidades da **Loja EBAC** de forma prática, cobrindo testes de UI, API, mobile (Android), performance e CI/CD.

---

## 🚀 Tecnologias Utilizadas

- ✅ [Cypress](https://www.cypress.io/) — Testes automatizados UI Web  
- ✅ [Jest](https://jestjs.io/) + [Supertest](https://github.com/visionmedia/supertest) — Testes de API  
- ✅ [Appium](https://appium.io/) — Testes mobile Android  
- ✅ [K6](https://k6.io/) — Testes de performance com export de resultados  
- ✅ [Node.js](https://nodejs.org/) — Ambiente de execução  
- ✅ [Swagger](http://lojaebac.ebaconline.art.br/rest-api/docs/) — API Reference  
- ✅ [GitHub Actions](https://docs.github.com/actions) — Integração contínua  
- ✅ [VS Code](https://code.visualstudio.com/) — Editor de código  

---

## 📐 Metodologia

O projeto foi desenvolvido com foco em um fluxo ágil e profissional de QA:

- Mapa mental de metodoligas e ferramentas com Miro
- Critérios de aceitação definidos em Gherkin  
- Casos de teste com técnicas como partição de equivalência e valor limite  
- Arquitetura modular (UI, API, Mobile, Performance)  
- Uso de Page Object Model no Cypress  
- Integração contínua com GitHub Actions  
- Geração de relatórios com Mochawesome  
- Scripts unificados para facilitar a execução e geração de evidências  

---

## 📋 User Stories

Funcionalidades validadas neste projeto:

- **US001** – Adicionar item ao carrinho  
- **US002** – Login na plataforma  
- **US003** – API de Cupons  

Todos os critérios de aceitação e casos de teste estão documentados em `/docs`.

---

## 🗂️ Estrutura do Projeto

```
TCC-EBAC-QE/
├── .github/workflows/
│   └── ci.yml
├── UI/                          # Testes com Cypress
│   ├── fixtures/
│   ├── pageObjects/
│   ├── support/
│   └── tests/
├── api/                         # Testes com Jest + Supertest
│   ├── schemas/
│   ├── tests/
│   └── utils/
├── mobile/                      # Testes com Appium (Android)
│   ├── config/
│   ├── pageObjects/
│   └── tests/
├── performance/                 # Testes de carga com K6
│   ├── data/
│   ├── reports/
│   ├── request/
│   └── simulations/
├── loja-ebac.apk                # APK usado nos testes mobile
├── cypress.config.js
├── package.json
└── README.md
```

---

## ✅ Scripts de Teste (package.json)



## ⚙️ Como Executar

### 1. Acessar o ambiente da loja

Utilize o ambiente oficial disponibilizado pela EBAC:

🔗 http://lojaebac.ebaconline.art.br/

---

### 2. Clonar o Projeto

```bash
git clone https://github.com/droxo63/TCC-EBAC-QE.git
cd TCC-EBAC-QE
```

---

### 3. Instalar dependências

```bash
npm install
```

---

### 4. Executar os Testes

#### Testes de UI (Cypress headless)

```bash
npm run test:ui
```

#### Testes de API (Jest + Supertest)

```bash
npm run test:api
```

#### Executar todos os testes (UI + API)

```bash
npm test
```

#### Testes de Performance (K6)

```bash
# Carrinho de compras
npm run perf:cart:json

# Login de usuários
npm run perf:login:json
```

---

### 📄 Relatórios

#### Gerar e visualizar relatório unificado (Mochawesome)

```bash
npm run open:report
```

> O relatório final será salvo e aberto automaticamente em `reports/report.html`

---

## 🔁 Integração Contínua

Este projeto possui CI configurado via GitHub Actions para:

- Instalar dependências  
- Executar testes de API e UI  
- Gerar relatórios e logs  
- Rodar em `push` ou `pull request` na branch `main`

Workflow: `.github/workflows/ci.yml`

---

## 📚 Conclusão

Este projeto final aplicou os principais pilares de qualidade de software:

- Planejamento de testes com histórias de usuário e critérios de aceitação
- Desenvlvimento de cenarios de testes com Gherkin
- Definição dos casos de teste com tecnicas de teste
- Automação de testes funcionais (UI e API)  
- Testes mobile Android com Appium  
- Testes de Performance com K6 e massa de dados  
- Integração contínua com GitHub Actions  
- Relatórios de resultados

Foi um exercício completo de validação de produto, simulação de um ambiente real e entrega de valor com foco em qualidade.

---

## 🙋‍♂️ Autor

**Diego Pereira**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dirpereira/)
