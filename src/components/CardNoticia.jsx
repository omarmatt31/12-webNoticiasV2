import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardNoticia = ({noticia}) => {
    return (
        <Col className='my-4'>
            <Card className='bg-warning h-100'>
                <Card.Img variant="top" src={noticia.image_url} />
                <Card.Body className='m-0 pb-3 bg-light'>
                        <Card.Text>
                        <p className='my-0 py-0'>{noticia.source_name} </p>
                        </Card.Text>
                        <Card.Text className=''>
                        <p className='my-0 py-0 mb-3'>{noticia.title}</p>
                        <p className='py-0 my-0  fw-light'>{noticia.description}</p>
                        </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-warning text-center">
                    <Button href={noticia.link}>Ver noticia completa</Button>
                </Card.Footer>
            </Card> 
        </Col>
    );
};

export default CardNoticia;