import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const FormularioNoticias = () => {
  
    let categoria=''    
  let url = 'https://newsdata.io/api/1/latest?apikey=pub_c98c47ded19e48b79a93b962f2ebc70d&language=es&category=science';
  const [noticias, setNoticias] = useState([])
  

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

  useEffect(()=>{ 
    obtenerNoticia();
  },[])

   const obtenerNoticia = async (data)=>{
        try{
        //setMostrarSpinner(true)
        url = 'https://newsdata.io/api/1/latest?apikey=pub_c98c47ded19e48b79a93b962f2ebc70d&language=es&category='+data.inputCategoria
        console.log(url)
        const respuesta = await fetch(url)
        console.log(respuesta)
        if(respuesta.status === 200){
            const datos = await respuesta.json()
            console.log(datos.results)
            //guardar en el state frase
            setNoticias(datos.results)
            //actualizar el spinner
            //setMostrarSpinner(false)
        }
        }catch(error){
            console.error(error)
        }
    }


    return (
        <>
        <section className='container bg-secondary py-4'>
            <Form onSubmit={handleSubmit(obtenerNoticia)}>
                    <Form.Group className="w-50 d-flex" controlId="formBasicSintomas">
                        <Form.Label className="text-light">Buscar por categorias:</Form.Label>
                        <Form.Select {...register('inputCategoria', {
                            required: 'Seleccione una categoria'
                        })}>
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
                    <div className="text-center">
                        <Button variant="info" type="submit" className="mt-3 text-light">
                            Consultar
                        </Button>
                    </div>
                </Form>
        </section>
        <section className="container p-0 my-0 rounded-3 w-75 mb-5">
                <ListaNoticias noticias={noticias}></ListaNoticias>
        </section>
        </>
    );
};

export default FormularioNoticias;