import React, { Component } from 'react';
import { Table,Input } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cart extends Component {
    state = {listCart : []}
    componentDidMount() {
        this.renderListCart()
    }


renderListCart =() => {
    axios.get('http://localhost:1997/cart',{
        params : {
            username : this.props.username
        }
    }).then((res) => {
        this.setState({listCart : res.data})
    })
    var listJSX = this.state.listCart.map((val) => {
        return (
            <tr>
            <th><img src={val.img} width="50px" alt={val.id}/></th>
            <td>{val.nama_popok}</td>
            <td>{val.harga_popok}</td>
            <td>{val.jumlah_popok}</td>
            <td>{val.kuantitas}</td>
          </tr> 
        )
    })
    return listJSX;
}

onCheckOut = () => {
    axios.post('http://localhost:1997/history', {
        username : this.props.username,
        order : this.state.listCart
    }).then((res) => {
        for(let i=0; i< this.state.listCart.length ; i++){
            axios.delete('http://localhost:1997/cart/' + this.state.listCart[i].id)
            .then((res) => {
                this.renderListCart()
            })
        }
    })
}

renderTotalHarga = () => {
   return(
        <div className='col-4'>
         <Input className="btn-primary" type='button' value='CHECKOUT' onClick ={this.onCheckOut}/>
        </div>
      )
    }
    
    onBtnDeleteClick = (id) => {
        if(window.confirm('Are you sure?')) {
            axios.delete('http://localhost:1997/cart/' + id)
                .then((res) => {
                    console.log(res);
                    this.getListCart();
                }).catch((err) => {
                    console.log(err);
                })
        }
    }           


render() {
    if(this.state.listCart.length > 0){
        return (
          <div className='container'>
          <center>
              <h1 style={{marginTop:'20px'}}>
                  CART
              </h1>
          </center>
        <Table style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Nama Produk</th>
              <th>Harga Barang</th>
              <th>Kuantitas</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
          {this.renderListCart()}
          
        </Table>
        <center>
            {this.renderTotalHarga()}
        </center>
        </div>
      );
      }else{
        return(
          <center>
            <div className='col-4'>
            <h1>there's nothing here</h1>
            <Link to='/popoklist'><Input type="button" className='btn' value="Lanjutkan Belanja"/></Link>          
            </div>
          </center>
        )
      }
      
    }
  }
const mapStateToProps = (state) => {
  return{
    username : state.auth.username
  }
}


export default connect(mapStateToProps)(Cart);