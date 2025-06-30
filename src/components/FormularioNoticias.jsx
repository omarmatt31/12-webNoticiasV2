import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    return (
        <>
        <section className='container bg-secondary py-4'>
            <Form onSubmit={handleSubmit()}>
                    <Form.Group className="w-50 d-flex" controlId="formBasicSintomas">
                        <Form.Label className="text-light">Buscar por categorias:</Form.Label>
                        <Form.Select {...register('inputCategoria', {
                            required: 'Seleccione una categoria'
                        })}>
                            <option value="" selected disabled hidden>Seleccione un genero</option>
                            <option>Business</option>
                            <option>Entertainment</option>
                            <option>General</option>
                            <option>Health</option>
                            <option>Science</option>
                            <option>Sports</option>
                            <option>Technology</option>
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
                <ListaNoticias></ListaNoticias>
        </section>
        </>
    );
};

export default FormularioNoticias;