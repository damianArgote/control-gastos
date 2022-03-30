import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
const Header = ({
  gastos,
  presupuesto,
  isValidPresupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
  setGastos,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          setPresupuesto={setPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
