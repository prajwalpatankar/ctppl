import React, { Component } from 'react';
import axios from 'axios';

class Master extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reqs: [],
            filtered_reqs: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/requisition/')
            .then(res => {
                const reqs = res.data;
                this.setState({ reqs });
                let filtered_reqs = reqs.filter(function (reqs) {
                    return ( reqs.isapproved_site === "Y" && reqs.isapproved_master === "N" )
                })
                this.setState({ filtered_reqs });
                console.log(this.state.filtered_reqs)
            })
    }

    submitHandler = (e,requisition) => {
        e.preventDefault()
        requisition.isapproved_master = "Y"
        console.log(requisition)
        axios.put(`http://localhost:8000/requisition/${requisition.id}/`, requisition)
            .then(response => {
                console.log(response)
            })
            .catch(error => [
                console.log(error)
            ])
    }

    render() {
        return (
            <div><br /><br /><br /><br /><br />
                {this.state.filtered_reqs.map((requisition, index) => (
                    <p>{requisition.req_id} <button type="submit" onClick={(e) => {this.submitHandler(e, requisition)}}>Approve</button> </p>
                ))}
            </div>

        );
    }
}

export default Master;