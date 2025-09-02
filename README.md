# Sistema de Compra de Ingressos

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow) ![Linguagem](https://img.shields.io/badge/language-JavaScript-blue)

## Descrição

Este projeto implementa um **carrinho de compras de ingressos** para diferentes setores (`superior`, `inferior`, `pista`) com verificação de estoque e alertas para compras indisponíveis.  

O sistema permite:  
- Selecionar tipo de ingresso e quantidade.  
- Adicionar ingressos ao carrinho.  
- Atualizar automaticamente o estoque.  
- Emitir alertas quando não há ingressos suficientes.  

---

## Estrutura do Projeto

### HTML
- `<select>` para escolher o tipo de ingresso.  
- `<input>` para quantidade.  
- `<span>` para mostrar o estoque disponível de cada setor.  
- Botões para adicionar ingressos ao carrinho.  

### JavaScript
- Array `ingressos` que armazena os ingressos selecionados temporariamente.  
- Função `comprar()` para processar a compra, verificar estoque e adicionar ao array.  
- Função `atualizar()` para atualizar os `<span>` de estoque e emitir alertas quando esgotado.  

---

## Funcionamento

1. O usuário seleciona o tipo de ingresso (`superior`, `inferior` ou `pista`) e digita a quantidade desejada.  
2. Ao clicar em **Comprar**, a função `comprar()` é chamada:  
   - Verifica se a quantidade digitada é válida.  
   - Verifica se há estoque suficiente.  
   - Limita a compra ao estoque disponível se necessário.  
   - Emite alertas caso a quantidade solicitada seja maior que o disponível.  
3. A função `atualizar()` diminui a quantidade nos `<span>` correspondentes e mantém os alertas de ingressos esgotados.  

---

## Exemplo de Uso

```html
<select id="tipo-ingresso">
  <option value="superior">Superior</option>
  <option value="inferior">Inferior</option>
  <option value="pista">Pista</option>
</select>

<input type="number" id="qtd" placeholder="Quantidade">
<button onclick="comprar()">Comprar</button>

<p>Superior: <span id="qtd-superior">50</span></p>
<p>Inferior: <span id="qtd-inferior">100</span></p>
<p>Pista: <span id="qtd-pista">200</span></p>
