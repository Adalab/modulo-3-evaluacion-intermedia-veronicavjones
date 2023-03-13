import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';


function App() {
  const [data, setData] = useState(quotes);
  const htmlData = data 
  .map((eachQuote) => (<ul className="quotes_list"></ul>{eachQuote}))

  

  







return (
    <div>
      <header>
      <h1>Frases de Friends</h1>
      </header>
      
      <main>
        <section>
          <form>
            <label htmlFor='filteredQuote'>
                  Filtrar por frase
                  <input
                    type="text"
                    id="filteredQuote"
                    
                  ></input>
              </label>
          </form>
          <form>
            <label htmlFor='filteredCharacter'>
              Filtrar por personaje
              <select
                name="filteredCharacter"
                id="filteredCharacter"
                
              >
                <option value="all">Todos</option>
                <option value="Ross">Ross</option>
                <option value="Monica">Monica</option>
                <option value="Joey">Joey</option>
                <option value="Phoebe">Phoebe</option>
                <option value="Chandler">Chandler</option>
                <option value="Rachel">Rachel</option>
              </select>
            </label>
          </form>
        </section>
        <section>{htmlData}
          <ul className="quotes_list">
            {eachQuote}
          </ul>
        </section>
        <section>
          <h2>Añadir una nueva Frase</h2>
         
          <form>
          <label htmlFor='quote'>
              
              <input
                type="text"
                id="quote"
                
              ></input>
            </label>
            <label htmlFor='character'>
              Personaje
              <input
                type="text"
                id="character"
               
              ></input>
            </label>
            <button  >Añadir una nueva frase</button>
          </form>
        </section>
      </main>
  

    </div>
  );
}

export default App;
