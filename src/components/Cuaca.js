import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Cuaca extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dataCuaca: [],
            provinsi: ["DigitalForecast-DKIJakarta.xml", "DigitalForecast-JawaBarat.xml", "DigitalForecast-JawaTengah.xml", "DigitalForecast-JawaTimur.xml", "DigitalForecast-DIYogyakarta.xml"],
            pilihan: 0
        }
        this.mySubmit = this.mySubmit.bind(this)
        this.getData = this.getData.bind(this)
    }

    mySubmit(event) {
        event.preventDefault()
        this.setState({ 
            dataCuaca: []
        }, ()=> {console.log(this.state.pilihan)})
        this.getData()
    }

    getData(){
        var xhttp = new XMLHttpRequest();
        var self = this;
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //alert(xhttp.responseText);
                var xmlDoc = xhttp.responseXML;
                var x = xmlDoc.getElementsByTagName('area');
                for (var i = 0; i < x.length; i++) {

                    //var z = y.getElementsByTagName('timerange')
                    //alert(y[i].getAttribute("description"))
                    self.setState(state => {
                        var tmp = self.state.dataCuaca.push({
                            'id': x[i].getAttribute("id"),
                            'nama': x[i].getAttribute("description"),
                            'longt': x[i].getAttribute("longitude"),
                            'lat': x[i].getAttribute("latitude"),
                        })
                        return (
                            tmp
                        )
                    });
                }
            }
        };
        xhttp.open("GET", "https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/" + self.state.provinsi[self.state.pilihan], true);
        xhttp.send();
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const elements = ['Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Yogyakarta'];
        return (
            <div >
                <Jumbotron className="py-4">
                    <div className="display-4 text-center">Cuaca Provinsi</div>
                    <Form className="my-4"> 
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Control as="select" onChange={(event)=>{
                                this.setState({
                                    pilihan: event.target.value
                                })
                                console.log(event.target.value)
                            }}>
                                {elements.map((value, index) => {
                                    return <option value={index}>{value}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Button className="btn" style={{ backgroundColor: "teal" }} variant="primary" onClick={this.mySubmit}>
                            Cari
                        </Button>
                    </Form>
                    <br /><br />

                    <Table striped bordered hover id="tableProvinsi">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nama Kota</th>
                                <th>Longitude</th>
                                <th>Latitude</th>
                                <th>Peta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.dataCuaca.map((key) => {
                                return (
                                <tr>
                                    <td>{key.id}</td>
                                    <td>{key.nama}</td>
                                    <td>{key.longt}</td>
                                    <td>{key.lat}</td>
                                    <td><a href='/lihat_peta'>Lihat Peta</a></td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Jumbotron>
            </div>
        )
    }
}

//<th>Nama Kota</th><th>Koordinate</th><th>Kelembaban</th><th>Temperature(°C)</th>
export default Cuaca;