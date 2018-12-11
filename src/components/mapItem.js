import React from 'react'
import { connect } from 'react-redux'
import { select_popok, tambahCart } from '../actions'
import {Input , Form} from 'reactstrap'
import axios from 'axios'

class mapping extends React.Component {


    onProdukClick = () => {
      this.props.select_popok(this.props.list)
    } 

    onCartBtn = () => {
    var idproduk = this.props.list.id
    var nama = this.props.list.nama
    var img = this.props.list.img
    var harga = this.props.list.harga
    var qty = this.refs.qty.refs.innerqty.value
    
    axios.post('http://localhost:1997/cart' , {
      
      username : this.props.username,
      id_produk : idproduk,
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


    render(){
            return(   
              <div  className={`col-md-4 col-sm-6 portfolio-item filter`}>
                      <a className="portfolio-link" data-toggle="modal" onClick={this.onProdukClick} >
                        <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x" />
                          </div>
                        </div>
                        <img className="img-fluid" src={this.props.list.img} alt />
                      </a>
                      <div className="portfolio-caption">
                        <h4 > {this.props.list.nama}</h4>
                        <p className="text-muted">{this.props.list.harga}</p>
                        <center>
                        <div className="col-8"> 
                        <Form inline>
                        <Input type="number" style={{ marginLeft:'20px' , width: '60px' , marginRight:'20px'}} ref='qty' innerRef = 'innerqty' defaultValue = '1'/>
                        <Input type="button" className="btn-danger" value='Add' onClick={this.onCartBtn}/>
                        </Form>
                        </div>
                        </center>
                      </div>     
              </div>  
              )                            
    }
}

const mapStateToProps = (state) => {
  return{
    username : state.auth.username
   }
}

export default connect(mapStateToProps , {select_popok , tambahCart})(mapping)