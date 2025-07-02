import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import FormularioNoticias from "./components/FormularioNoticias";

function App() {

  return (
    <>
      <main>
        <Titulo></Titulo>
        <FormularioNoticias></FormularioNoticias>
      </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>💻 Omar Mattos 💻</p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
