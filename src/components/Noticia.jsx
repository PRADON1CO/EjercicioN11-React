import Card from "react-bootstrap/Card";

const Noticia = ({noticia}) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 my-1">
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/R.134275efe2edde9c1b2f54a3b41d7e9b?rik=yPQwMnuA0FjmbA&riu=http%3a%2f%2fferramentasinteligentes.com.br%2fwp-content%2fuploads%2f2015%2f06%2fwater-209901_1280.jpg&ehk=xnl0YRcaEQ96ra5oHwKkHhaJ9GeUczedE05Ahfq8UN0%3d&risl=&pid=ImgRaw&r=0" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the's content.
          </Card.Text>
          <a className="btn btn-dark ">Ver Noticia</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Noticia;
