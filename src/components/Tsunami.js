import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/table';
import { Jumbotron } from 'react-bootstrap';


class Tsunami extends React.Component {
    render() {
        return (
            <div style={{ backgrounColor: "#e9ecef" }}>
                <Jumbotron>
                    <div className="h1 mb-4">Tsunami Terakhir</div>
                    <Table table-striped bordered hover>
                        <thead className="thead-dark">
                            <tr>
                                <th>Waktu Gempa</th>
                                <th>Lintang</th>
                                <th>Bujur</th>
                                <th>Magnitudo</th>
                                <th>Kedalaman</th>
                                <th>Wilayah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>14-Nov-19<br />23:17:43 WIB</td>
                                <td>1.67</td>
                                <td>126.39</td>
                                <td>7.1 SR</td>
                                <td>73 Km</td>
                                <td>137 km Barat Laut JAILOLO-MALUT</td>
                            </tr>
                        </tbody>
                    </Table>
                </Jumbotron>
            </div>
        )
    }
}

export default Tsunami;