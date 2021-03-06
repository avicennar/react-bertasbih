import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Carousel from './Carousel';

class HomeBertasbih extends Component {
    state = { listPopok: [] }

    componentWillMount() {
        axios.get('http://localhost:1997/popok')
            .then((res) => {
                this.setState({ listPopok: res.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    renderListPopok = () => {
        var listJSXPopok = this.state.listPopok.map((item) => {
            return (
                <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <h2>
                    <p>{item.nama}</p>
                    <p>{item.description}</p>
                    <p>{item.harga}</p>
                    </h2>
                </div>
                </div>
                </div>
            )
        })
        return listJSXPopok;
    }

    render() {
        if(this.props.username === "") {
        return(
            <div>
                <center>
                    <h1>{this.props.pikachu}</h1>
                <Carousel />
                </center>
            </div>
        );
        }
        return(
            <div>
                <center>
                    <div>
                        <h1>{this.props.pikachu}</h1>
                    </div>
                <Carousel />
                </center>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return { pikachu: state.pikachu,
             username: state.auth.username};
}

export default connect(mapStateToProps)(HomeBertasbih);
