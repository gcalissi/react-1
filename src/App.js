import React from 'react';
import './style.css';

// The content below is only a placeholder and can be replaced
export default function App() {
  return (
    <div>
      <h1>Esercizio react 1</h1>
      <div
        style={{
          padding: '10px',
          border: '1px solid #eee',
          'border-radius': '10px',
          width: '80%',
        }}
      >
        <img scr="assets/exercise.png" />
      </div>
      <p>
        Osservando l'immagine è possibile individuare una lista di elementi che
        hanno la seguente struttura
      </p>
      <ol>
        <li>
          un quadrato a sinistra rosso con bordi arrotondati (dimensione 50x50
          px)
        </li>
        <li>il quadrato ha una distanza dal testo fissa di 1rem</li>
        <li>un titolo in grassetto (2rem)</li>
        <li>una descrizione (1rem)</li>
        <li>ogni riga è separata da una linea</li>
        <li>
          la lista si adatta in larghezza al 100% (per cui ogni volta che viene
          allargato lo schermo, il quadrato mantiene sempre la stessa distanza
          dal testo, cioè 1rem)
        </li>
      </ol>
      <p>
        L'array di riferimento è possibile recuperarlo nella cartella
        "mock-data" nel file "posts.mock"
      </p>
      <p>
        E' possibile usare qualsiasi libreria per risolvere l'attività,
        l'importante sarà sicuramente motivare le scelte intaprese.
      </p>
      <p>
        Il candidato può scaricare il progetto sul suo personal e risolverlo in
        locale, o agire direttamente su Stackblitz (al primo salvataggio verrà
        creato in automatico un nuovo fork del progetto).
      </p>
      <p>
        <b>Buon lavoro!</b>
      </p>
    </div>
  );
}
