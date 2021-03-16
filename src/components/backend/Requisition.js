import axios from 'axios';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class Requisition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            req_id: '',
            isapproved_site: 'N',
            isapproved_master: 'N',
        }
        this.reqs_all = [];
        this.reqs_filtered = [];
    }

    componentDidMount() {
        axios.get('http://localhost:8000/requisition/')
            .then(res => {
                const reqs = res.data;
                this.reqs_all = res.data;
                this.reqs_filtered = reqs.filter(function (reqs) {
                    return reqs.isapproved_site === "R"
                })
                console.log(this.reqs_all)
            })
            
        }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/requisition/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => [
                console.log(error)
            ])
    }

    render() {
        const { req_id } = this.state
        return (
            <div><br /><br /><br /><br /><br />
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="req_id" value={req_id} onChange={this.changeHandler} />
                    <button type="submit" >Submit</button>
                </form>

                <br />

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Approved </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.reqs_all.map((requisition, index) => (
                            <tr>
                                <td>f</td>
                                <td>{requisition.req_id}</td>
                                <td>{requisition.isapproved_master}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>f</td>
                            <td>f</td>
                            <td>f</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        );
    }
}

export default Requisition;