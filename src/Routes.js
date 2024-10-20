import ExercicioPagina from "Page/ExercicioPagina";
import Inicio from "Page/Inicio";
import PaginaNaoEncontrada from "Page/PaginaNaoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <div className="app"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Inicio /> } />
          <Route path=":id" element={ <ExercicioPagina /> }/>
          <Route path="*" element={ <PaginaNaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
