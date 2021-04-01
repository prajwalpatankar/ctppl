import axios from 'axios';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class Requisition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            req_id: '',
            message: "",
            isapproved_site: 'N',
            isapproved_master: 'N',
            reqs: [],
            filtered_reqs: [],
        }

    }

    componentDidMount() {
        console.log("im in")
        axios.get('http://localhost:8000/requisition/')
            .then(res => {
                const reqs = res.data;
                this.setState({ reqs });
                let filtered_reqs = reqs.filter(function (reqs) {
                    return ( reqs.isapproved_site === "R" || reqs.isapproved_master === "R" )
                })
                this.setState({ filtered_reqs });
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
                this.componentDidMount();
            })
            .catch(error => [
                console.log(error)
            ])
            setTimeout(this.componentDidMount(),300);
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

                <br />
                <h2>Rejected</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Approved </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filtered_reqs.map((requisition, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{requisition.req_id}</td>
                                <td>{requisition.isapproved_site}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                
                <br /><br /><br />

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Approved </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reqs.map((requisition, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{requisition.req_id}</td>
                                <td>{requisition.isapproved_site}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        );
    }
}

export default Requisition;