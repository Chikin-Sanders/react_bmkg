import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/table';
import { Jumbotron } from 'react-bootstrap';


class Gempa extends React.Component {
    render() {
        return (
            <div style={{ backgrounColor: "#e9ecef" }}>
                <Jumbotron>
                    <div className="h1 mb-4">Gempa Bumi Terakhir</div>
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
                                <td>21-Oct-2020<br />07:30:32 WIB </td>
                                <td>1.31 LS</td>
                                <td>120.01 BT</td>
                                <td>4.4</td>
                                <td>10 Km</td>
                                <td>5 km Barat Laut Tomado </td>
                            </tr>
                        </tbody>
                    </Table>
                </Jumbotron>
            </div>
        )
    }
}

export default Gempa;