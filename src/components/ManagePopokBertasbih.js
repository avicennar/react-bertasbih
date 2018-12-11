import React, { Component } from 'react';
import axios from 'axios';
import '../Support/css/bunting.css';

class ManagePopokBertasbih extends Component {
    state = { listPopok: [], selectedIdEdit: 0 }
    componentDidMount() {
        this.getPopokList();
    }

    getPopokList = () => {
        axios.get('http://localhost:1997/popok/')
            .then((res) => {
                this.setState({ listPopok: res.data, selectedIdEdit: 0 })
            }).catch((err) => {
                console.log(err)
            })
    }

    onBtnAddClick = () => {
        var nama = this.refs.namaAdd.value;
        var jenis = this.refs.jenisAdd.value;
        var harga = this.refs.hargaAdd.value;
        var img = this.refs.imgAdd.value;
        var description = this.refs.descAdd.value;

        axios.post('http://localhost:1997/popok/', {
                nama, jenis, harga, img, description
            }).then((res) => {
                this.getPopokList();
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Are you sure?')) {
            axios.delete('http://localhost:1997/popok/' + id)
                .then((res) => {
                    console.log(res)
                    this.getPopokList();
                }).catch((err) => {
                    console.log(err);
                })
        }
    }

    onBtnSaveClick = (id) => {
        var nama = this.refs.namaEdit.value;
        var jenis = this.refs.jenisEdit.value;
        var img = this.refs.imgEdit.value;
        var harga = this.refs.hargaEdit.value;
        var description = this.refs.descEdit.value;

        axios.put('http://localhost:1997/popok/' + id, {
            nama, jenis, img, harga, description
        }).then((res) => {
            this.getPopokList();
        }).catch((err) => {
            console.log(err);
        })
    }

    renderBodyPopok = () => {
        var listJSXPopok = this.state.listPopok.map(({ id, nama, jenis, harga, description, img}) => {
            if(id !== this.state.selectedIdEdit) {
                return (
                    
                    <tr>
                        <td>{id}</td>
                        <td>{nama}</td>
                        <td>{jenis}</td>
                        <td>Rp. {harga}</td>
                        <td><img src={img} width="50px" alt={id} /></td>
                        <td>{description}</td>
                        <td><input className="btn btn-primary" type="button" value="Edit" onClick={() => this.setState({ selectedIdEdit: id })} /></td>
                        <td><input className="btn btn-danger" type="button" value="Delete" onClick={() => this.onBtnDeleteClick(id)} /></td>
                    </tr> )
            }
            
            return (
                <tr>
                    <td>{id}</td>
                    <td>
                        <input 
                            type="text" 
                            defaultValue={nama}
                            ref="namaEdit"
                        />
                    </td>
                    <td>
                        <input 
                        type="text" 
                        defaultValue={jenis}
                        ref="jenisEdit"
                        />
                            
                    </td>
                    <td>
                        <input
                            type="number"
                            ref="hargaEdit"
                            defaultValue={harga}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            ref="imgEdit"
                            defaultValue={img}
                        />
                    </td>
                    <td>
                        <textarea 
                            defaultValue={description}
                            ref="descEdit"
                        ></textarea>
                    </td>
                    <td><input className="btn btn-primary" type="button" value="Save" onClick={() => this.onBtnSaveClick(id)} /></td>
                    <td><input className="btn btn-danger" type="button" value="Cancel" onClick={() => this.setState({ selectedIdEdit: 0 })} /></td>
                </tr> )
            
        })
        return listJSXPopok;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Manage List Produk</h2>
                    </div>
                </div>
                <center>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th>Jenis</th>
                                <th>Harga</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderBodyPopok()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>
                                    <input ref="namaAdd" type="text" placeholder="Nama Produk" />
                                </td>
                                <td>
                                    <input ref="jenisAdd" type="text" placeholder="Jenis" />
                                </td>
                                <td>
                                    <input ref="hargaAdd" type="number" placeholder="Harga" />
                                </td>
                                <td>
                                    <input ref="imgAdd" type="text" placeholder="Image Url" />
                                </td>
                                <td>
                                    <textarea ref="descAdd" placeholder="Enter the Description here"></textarea>
                                </td>
                                <td>
                                    <input type="button" className="btn btn-success" value="Add" onClick={this.onBtnAddClick} />
                                </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </center>
            </div>
        );
    }
}

export default ManagePopokBertasbih;