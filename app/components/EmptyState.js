export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl leading-12">
      <p>
        {" "}
        Customize a personalidade do Martin clicando em{" "}
        <button
          className="prompt-button inline-flex items-center "
          onClick={() => setOpen(true)}
        >
          Personalizar{" "}
        </button>{" "}
        e sinta a mágica.
      </p>
      <p>
        Eu posso{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Explique o mecanismo de autoatenção que os Transformers usam como se eu tivesse cinco anos."
            )
          }
        >
          explicar conceitos
        </button>
        , escrever{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt("Escreva um poema sobre aprendizado de máquina de código aberto. ")
          }
        >
          poemas
        </button>{" "}
        e{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Escreva um script python que treine `bert-large` no conjunto de dados `IMDB` usando a classe Transformers `Trainer` e a biblioteca Datasets. Tenho acesso a quatro GPUs, então vamos usar DDP. Por favor, escreva o script e diga-me como iniciá-lo na linha de comando."
            )
          }
        >
          código de programação
        </button>
        ,{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Responda a esta pergunta apenas com base nas informações fornecidas aqui. Gatos gostam de cachorros e cachorros gostam de coelhos. Os gatos gostam de tudo que os cães gostam. Eu realmente não gosto de coelhos. Como os gatos se sentem em relação aos coelhos?"
            )
          }
        >
          resolver quebra-cabeças
        </button>
        , ou até ajudar{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "forneça 10 nomes divertidos para um pelicano de estimação. Por favor, crie emojis exclusivos para acompanhar cada nome. Tente não repetir os mesmos emojis. Faça-lhes nomes divertidos, coloridos e amorosos"
            )
          }
        >
          a dar nome aos seus pets.
        </button>{" "}
      </p>
      <p>Envie-me uma mensagem ou carregue uma imagem ou arquivo de áudio.</p>
    </div>
  );
}
