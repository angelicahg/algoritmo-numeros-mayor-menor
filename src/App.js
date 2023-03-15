import React from 'react';
import './App.css';
import MayorMenor from '../src/components/MayorMenor';
import MayorMenorNumero from '../src/components/MayorMenorNumero';



function App() {
  const numeros = [5, 10, 15, 20, 25];
  const numeros2 = [3, 6, 2, 8, 1];
  
  return (
    <div>
      <MayorMenor numeros={numeros} />
      <MayorMenorNumero numeros={numeros2} />;
      
     
    </div>
  );
}


export default App;
