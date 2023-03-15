
import React from 'react';

function encontrarMayorMenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mayor) {
        mayor = arr[i];
      }
      if (arr[i] < menor) {
        menor = arr[i];
      }
    }
  
    return { mayor, menor };
  }

function MayorMenorNumero({ numeros }) {
    const { mayor, menor } = encontrarMayorMenor(numeros);
  
    return (
      <div>
        <p>El número mayor es {mayor}</p>
        <p>El número menor es {menor}</p>
      </div>
    );
  }

  export default MayorMenorNumero;