import React from 'react';

function MayorMenor({ numeros }) {
  const mayor = Math.max(...numeros);
  const menor = Math.min(...numeros);

  return (
    <div>
      <p>El número mayor es {mayor}</p>
      <p>El número menor es {menor}</p>
    </div>
  );
}

export default MayorMenor;