import { Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form"
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const FormularioNoticias = () => {
  
  const [noticias, setNoticias] = useState([])
    const [mostrarSpinner, setMostrarSpinner] = useState(true)
    let url =''

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

  useEffect(()=>{ 
    obtenerNoticia(
    {inputCategoria: "science",
    inputPais: "us"}
    );
  },[])

   const obtenerNoticia = async (data)=>{
        try{
        console.log(data)
        setMostrarSpinner(true)
        url = `https://newsdata.io/api/1/latest?apikey=pub_c98c47ded19e48b79a93b962f2ebc70d&language=es&category=${data.inputCategoria}&country=${data.inputPais}`;
        console.log(url)
        const respuesta = await fetch(url)
        if(respuesta.status === 200){
            const datos = await respuesta.json()
            setNoticias(datos.results)
            //actualizar el spinner
            setMostrarSpinner(false)
        }
        }catch(error){
            console.error(error)
        }
    }

const handleChange = (e) => {
    const categoriaSeleccionada = e.target.value;
    if (categoriaSeleccionada) {
      obtenerNoticia(categoriaSeleccionada);
    }
  }


    return (
        <>
        <section className='container bg-warning py-4 rounded-2'>
            <Form onSubmit={handleSubmit(obtenerNoticia)}>
                    <Form.Group className="w-50 d-flex" controlId="formBasicCategoria">
                        <Form.Label className="text-light fw-bolder ms-3">Buscar por categorias:</Form.Label>
                        <Form.Select {...register('inputCategoria', {
                            required: 'Seleccione una categoria'
                        })}>
                            <option value="" selected disabled hidden>Seleccione una categoria</option>
                            <option value="business">Negocios</option>
                            <option value="crime">Policiales</option>
                            <option value="education">Educacion</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="environment">Medio Ambiente</option>
                            <option value="food">Comida</option>
                            <option value="health">Salud</option>
                            <option value="politics">Politica</option>
                            <option value="science">Ciencia</option>
                            <option value="sports">Deporte</option>
                            <option value="technology">Tecnologia</option>
                            <option value="world">Mundo</option>
                        </Form.Select>
                        <Form.Text className="mb-2 text-danger">{errors.inputCategoria?.message}</Form.Text>
                    </Form.Group>
                    <Form.Group className="w-50 d-flex my-3" controlId="formBasicPais">
                        <Form.Label className="text-light fw-bolder ms-3 me-3">Pais:</Form.Label>
                        <Form.Select {...register('inputPais', {
                            required: 'Seleccione una categoria'
                        })}>
                            <option value="" selected disabled hidden>Seleccione un pais</option>
                            <option value="us">Estados Unidos</option>
                            <option value="gb">Inglaterra</option>
                            <option value="ar">Argentina</option>
                            <option value="br">Brasil</option>
                            <option value="ca">Canada</option>
                            <option value="cl">Chile</option>
                            <option value="fr">Francia</option>
                            <option value="de">Alemania</option>
                            <option value="jp">Japon</option>
                            <option value="mx">Mexico</option>
                            <option value="ru">Rusia</option>
                            <option value="es">España</option>
                        </Form.Select>
                        <Form.Text className="mb-2 text-danger">{errors.inputCategoria?.message}</Form.Text>
                    </Form.Group>
                    <div className="text-center">
                    <Button variant="info" type="submit" className="mt-3 mx-5 text-light">
                            Consultar
                    </Button>
                    </div>
                </Form>
        </section>
        <section className="container p-0 my-0 rounded-3 w-75 mb-5">
        {mostrarSpinner ?(
        <div className="my-4 text-center">
          <Spinner animation="grow" variant="warning" />
        </div>
        ) : (
                <ListaNoticias noticias={noticias}></ListaNoticias>
                )}
        </section>
        </>
    );
};

export default FormularioNoticias;