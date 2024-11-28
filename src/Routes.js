import ScrollToTop from "Components/ScrollToTop";
import ExercicioPagina from "Page/ExercicioPagina";
import Inicio from "Page/Inicio";
import Login from "Page/Login";
import PaginaNaoEncontrada from "Page/PaginaNaoEncontrada";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <div className="app"> 
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Inicio /> } />
          <Route path=":id" element={ <ExercicioPagina /> }/>
          <Route path="/login" element={ <Login /> } />
          <Route path="*" element={ <PaginaNaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default AppRoutes;
