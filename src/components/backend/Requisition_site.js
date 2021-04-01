import axios from 'axios';
import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import 'antd/dist/antd.css';


class RequisitionSite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "",
            current_req: {},
            reqs: [],
            filtered_reqs: [],
            setIsModalVisible: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/requisition/')
            .then(res => {
                const reqs = res.data;
                this.setState({ reqs });
                let filtered_reqs = reqs.filter(function (reqs) {
                    return reqs.isapproved_site === "N"
                })
                this.setState({ filtered_reqs });
            })
    }

    approveHandler = (e, requisition) => {
        e.preventDefault()
        requisition.isapproved_site = "Y"
        console.log(requisition)
        axios.put(`http://localhost:8000/requisition/${requisition.id}/`, requisition)
            .then(response => {
                console.log(response)
                this.componentDidMount()
            })
            .catch(error => [
                console.log(error)
            ])
        setTimeout(this.componentDidMount(), 300);
    }

    rejectHandler = () => {
        let requisition = this.state.current_req
        requisition.message = this.state.message
        requisition.isapproved_site = "R"
        console.log(requisition)
        axios.put(`http://localhost:8000/requisition/${requisition.id}/`, requisition)
            .then(response => {
                console.log(response)
                this.componentDidMount()
            })
            .catch(error => [
                console.log(error)
            ])
            this.setState({ setIsModalVisible: false });
        setTimeout(this.componentDidMount(), 300);
    }

    handleChange =(e) => {
        this.setState({ message: e.target.value })
    }

    showModal = (e, requisition) => {
        this.setState({ setIsModalVisible: true, current_req: requisition });
        console.log(requisition)
    };

    handleCancel = () => {
        this.setState({ setIsModalVisible: false });
    };


    render() {
        return (
            <div><br /><br /><br /><br /><br />
                {this.state.filtered_reqs.map((requisition, index) => (
                    <p>
                        {requisition.req_id}
                        <button type="submit" onClick={(e) => { this.submitHandler(e, requisition) }}>Approve</button>
                        &nbsp; &nbsp; &nbsp;
                        <button type="submit" onClick={(e) => { this.rejectHandler(e, requisition) }}>Reject</button>
                        &nbsp; &nbsp; &nbsp;


                        <Button type="primary" onClick={(e) => this.showModal(e, requisition)}>
                            Reject
                        </Button>
                    </p>
                ))}

                <Modal title="Basic Modal" visible={this.state.setIsModalVisible} onOk={this.rejectHandler} onCancel={this.handleCancel}>
                        <Input.TextArea rows={4} onChange={this.handleChange}/>
                </Modal>
            </div>

        );
    }
}

export default RequisitionSite;