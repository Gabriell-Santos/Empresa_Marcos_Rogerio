# SME – Landing Page para empresa de instalações elétricas

![Prévia da landing page da SME](https://github.com/Gabriell-Santos/Empresa_Marcos_Rogerio/blob/master/image.png?raw=true)

Landing page institucional desenvolvida para a **SME Serviços de Instalação Elétricas e Manutenção**, empresa que atua com instalações, reformas e manutenção elétrica. Este é um **projeto real, feito para um cliente**: da conversa sobre o que a empresa precisava até a página pronta, com o conteúdo e as fotos dos serviços da própria equipe.

O site usa apenas **HTML, CSS e JavaScript puros**, sem frameworks ou bibliotecas.

## O problema

A empresa precisava de uma presença online simples, que explicasse o que ela faz e deixasse o cliente pedir um orçamento sem complicação, principalmente pelo celular.

## A solução

Uma página única, rápida e responsiva, com os serviços em destaque, fotos reais de trabalhos executados e um formulário que leva a conversa direto para o WhatsApp do responsável pelo atendimento.

## Seções

- **Início:** apresentação da empresa e chamada para orçamento
- **Serviços:** instalações novas, reformas e adequações, mudança de padrão e caixa de entrada, cabeamento, eletrocalhas e eletrodutos, manutenção em geral
- **Contratos e NRs:** atendimento em contratos fixos e temporários, com serviços em conformidade com as Normas Regulamentadoras
- **Trabalhos:** galeria com fotos de serviços executados
- **Contato:** formulário que monta a mensagem e abre o WhatsApp

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, Flexbox e Grid)
- JavaScript (validação do formulário e integração com o WhatsApp via `wa.me`)
- Google Fonts (Barlow e Barlow Condensed)

## O que este projeto demonstra

- **Entrega para cliente real:** levantamento do conteúdo, definição da identidade visual (azul e amarelo) e adaptação do texto à linguagem do público
- **Responsividade:** layout pensado primeiro para celular, com grid adaptável e galeria que muda de colunas conforme a tela
- **Acessibilidade:** HTML semântico, foco visível no teclado, textos alternativos nas imagens e respeito a `prefers-reduced-motion`
- **Tema claro e escuro:** cores definidas com variáveis CSS, que se adaptam à preferência do sistema
- **SEO básico:** `title`, meta description, hierarquia de títulos e estrutura semântica
- **Performance:** sem dependências, imagens com `loading="lazy"` e dimensões declaradas para evitar saltos no layout
- **JavaScript sem bibliotecas:** validação de formulário e geração do link do WhatsApp com a mensagem já preenchida

## Estrutura

```
Empresa_Marcos_Rogerio/
├── index.html   # estrutura e conteúdo
├── style.css    # estilos
├── script.js    # formulário e envio para o WhatsApp
├── image.png    # prévia da página
└── assets/      # fotos dos serviços
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gabriell-Santos/Empresa_Marcos_Rogerio.git
   ```
2. Abra o arquivo `index.html` no navegador. Não precisa instalar nada.

## Próximos passos

- Publicar o site com domínio próprio e HTTPS
- Adicionar dados estruturados (JSON-LD) e Open Graph para melhorar a busca e o compartilhamento
- Incluir a cidade de atendimento no conteúdo, para melhorar o SEO local

## Autor

Desenvolvido por [@Gabriell-Santos](https://github.com/Gabriell-Santos)
