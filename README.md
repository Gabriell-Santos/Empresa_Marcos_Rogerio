# ⚡ SME - Landing Page de Instalações Elétricas

<p align="center">
  <img src="https://raw.githubusercontent.com/Gabriell-Santos/Empresa_Marcos_Rogerio/master/image.png" alt="SME - Demonstração" width="800">
</p>

## 📖 Sobre o Projeto

A SME é uma empresa de instalações elétricas e manutenção, e este é o site criado para ela. Um **projeto real, feito para um cliente**, que precisava de uma presença online simples para explicar o que faz e receber pedidos de orçamento.

A proposta é direta: o cliente entra na página, entende os serviços, vê fotos de trabalhos já executados e fala com o responsável pelo atendimento no WhatsApp em poucos cliques, principalmente pelo celular.

O site foi feito só com **HTML, CSS e JavaScript puros**, sem frameworks e sem dependências.

## 🚀 Tecnologias Utilizadas

* HTML5 - Estrutura semântica da página
* CSS3 - Estilização com variáveis CSS, Flexbox e Grid
* JavaScript - Validação do formulário e integração com o WhatsApp
* WhatsApp (wa.me) - Envio da mensagem de orçamento já preenchida
* Google Fonts - Fontes Barlow e Barlow Condensed

## 📦 Funcionalidades

* 🧭 Menu fixo no topo com navegação por seções
* 🔌 Lista dos serviços: instalações novas, reformas, mudança de padrão, cabeamento, eletrocalhas, eletrodutos e manutenção
* 📝 Contratos fixos e temporários, com serviços em conformidade com as NRs
* 🖼️ Galeria com fotos reais de serviços executados
* 💬 Formulário de orçamento que abre o WhatsApp do responsável com a mensagem pronta
* 🌗 Tema claro e escuro, conforme a preferência do sistema
* ♿ Foco visível no teclado, textos alternativos nas imagens e respeito a `prefers-reduced-motion`
* 📱 Layout responsivo, pensado primeiro para celular

## 🖥️ Como executar o projeto

```bash
# Clone este repositório
git clone https://github.com/Gabriell-Santos/Empresa_Marcos_Rogerio.git

# Acesse a pasta do projeto
cd Empresa_Marcos_Rogerio
```

Depois é só abrir o arquivo `index.html` no navegador. Não precisa instalar nada.

Para usar com outro número, altere a variável `WHATS` no `script.js` (código do país + DDD, só dígitos):

```js
var WHATS = "5519999999999";
```

## 📁 Estrutura do Projeto

```
Empresa_Marcos_Rogerio/
├── assets/        # fotos dos serviços
├── index.html     # estrutura e conteúdo
├── style.css      # estilos e responsividade
├── script.js      # formulário e envio para o WhatsApp
└── image.png      # prévia do projeto
```


## 👤 Autor

Desenvolvido por [Gabriell Santos](https://github.com/Gabriell-Santos)
