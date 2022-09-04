import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllAgents from "./pages/AllAgents";
import AgentDetail from "./pages/AgentDetail";
import AllArmas from "./pages/AllArmas";
import ArmaDetail from "./pages/ArmaDetail";

function App() {
  return (
    <div className="bg-dark">

      <BrowserRouter>
        
        <Menu />

       <Container>   
        <Routes>
          <Route path="/" element={<AllAgents />} />
          <Route path="/agentes" element={<AllAgents />} />
          <Route path="/agentes/:id" element={<AgentDetail />} />

          <Route path="/armas" element={<AllArmas />} />
          <Route path="/armas/:id" element={<ArmaDetail />} />
        </Routes>
       </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
