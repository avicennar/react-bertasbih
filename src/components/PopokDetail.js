import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string';
import { select_popok } from '../actions';
import { Input, Button } from 'reactstrap';

class PopokDetail extends Component {

    componentDidMount() {
        var params = queryString.parse(this.props.location.search)
        var popokId = params.popokid;

        axios.get(`http://localhost:1997/popok/${popokId}`)
            .then((res) => {
                console.log(res)
                this.props.select_popok(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }

        onPopokClick = () => {
            this.props.select_popok(this.props.popok)
        } 
      
        onCartBtn = () => {
            var idproduk = this.props.popok.id
            var nama = this.props.popok.nama
            var img = this.props.popok.img
            var harga = this.props.popok.harga
            var qty = this.refs.qty.refs.innerqty.value
          
            axios.post('http://localhost:1997/cart' , {
            
                        
                        id_produk : idproduk,
                        username : this.props.username,
                        nama_produk : nama,
                        img : img,
                        harga_produk : harga,
                        kuantitas : qty,
                        total : harga*qty,
                        id_order : 1
                    }).then((res) => {
                        console.log(res)
                        alert('Produk berhasil dimasukan ke Keranjang')
                        this.props.tambahCart() 
                    }).catch((err) => {
                        console.log(err)
                    })
                    }  



    render() {
        var { nama, harga, img, description, jenis } = this.props.popok;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <img alt={img} src={img} className="img-responsive" />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <h1>{nama}</h1>
                        </div>
                        <div className="row">
                            <h3>{jenis}</h3>
                        </div>
                        <div className="row">
                            <h2>Rp. {harga}</h2>
                        </div>
                        <div className="row">
                            <p>{description}</p>
                        </div>
                        <div>
                        <Input type="number" style={{ marginLeft:'20px' , width: '60px' , marginRight:'20px'}} ref='qty' innerRef = 'innerqty' defaultValue = '1' />
                        <Button color="success" value='Add' onClick={this.onCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { popok: state.selectedPopok }
}

export default connect(mapStateToProps, { select_popok })(PopokDetail);