import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const FormularioNoticias = () => {
  
  
  let url = 'https://newsdata.io/api/1/latest?apikey=pub_c98c47ded19e48b79a93b962f2ebc70d&language=es&category=science';
  const [noticias, setNoticias] = useState([])
  

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

  useEffect(()=>{ 
    obtenerNoticia('science');
  },[])

   const obtenerNoticia = async (data)=>{
        try{
        //setMostrarSpinner(true)
        url = `https://newsdata.io/api/1/latest?apikey=pub_c98c47ded19e48b79a93b962f2ebc70d&language=es&category=${data}`;
        console.log(url)
        const respuesta = await fetch(url)
        if(respuesta.status === 200){
            const datos = await respuesta.json()
            setNoticias(datos.results)
            //actualizar el spinner
            //setMostrarSpinner(false)
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
            <Form>
                    <Form.Group className="w-50 d-flex" controlId="formBasicSintomas">
                        <Form.Label className="text-light fw-bolder ms-3">Buscar por categorias:</Form.Label>
                        <Form.Select {...register('inputCategoria', {
                            required: 'Seleccione una categoria'
                        })}  onChange={handleChange}>
                            <option value="" selected disabled hidden>Seleccione un genero</option>
                            <option>business</option>
                            <option>crime</option>
                            <option>domestic</option>
                            <option>education</option>
                            <option>entertainment</option>
                            <option>environment</option>
                            <option>food</option>
                            <option>health</option>
                            <option>lifestyle</option>
                            <option>politics</option>
                            <option>science</option>
                            <option>sports</option>
                            <option>technology</option>
                            <option>top</option>
                            <option>tourism</option>
                            <option>world</option>
                            <option>other</option>

                        </Form.Select>
                        <Form.Text className="mb-2 text-danger">{errors.inputCategoria?.message}</Form.Text>
                    </Form.Group>

                </Form>
        </section>
        <section className="container p-0 my-0 rounded-3 w-75 mb-5">
                <ListaNoticias noticias={noticias}></ListaNoticias>
        </section>
        </>
    );
};

export default FormularioNoticias;