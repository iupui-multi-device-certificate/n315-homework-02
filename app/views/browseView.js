const renderQuote = (quote) => `  
    <figure class="card">
      <img src="./images/quotes/quote${quote.id}.jpg" alt="${quote.author}" />
        <figcaption class="card-body">
          <h1 class="card-title">${quote.author}</h1>
          ${quote.text}          
        </figcaption>
    </figure>
`;

const renderQuotes = (quotes) => `
  ${quotes.map((quote) => renderQuote(quote)).join("")}
`;

export const browseView = (quotes) => `

        <section class="gallery">
          <h1 class="section-title">Seedlings</h1>
          <div class="cards">
            ${renderQuotes(quotes)}
          </div>
        </section>

`;
