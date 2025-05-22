# ❓ O que são type no TypeScript? Pra que servem e por que usar?

### O type em TypeScript é usado para definir o formato de um dado, como a estrutura de um objeto, união de tipos ou aliases. Ele serve para trazer segurança ao código, garantindo que os dados estejam no formato correto em tempo de desenvolvimento, evitando bugs e ajudando o editor com autocompletar. Eu usotype para tipar props de componentes, respostas de APIs, ou qualquer estrutura que precise ser clara e reutilizável.


## 🧠 Quer um exemplo prático?
```ts
type Usuario = {
  nome: string;
  idade: number;
  ativo: boolean;
};

```

## Isso cria um alias de tipo chamado Usuario.

##  Serve para:
  ### - Reutilizar estrutura
   ### - Ter segurança em API e lógica
