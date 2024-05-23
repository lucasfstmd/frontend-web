import React, { Component } from "react";

export default class Home extends Component {
    public render() {
        return (
            <React.Fragment>
                <div className="home">
                    <div className="card-header">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    <div className="container m-2">
                                        <div className="search-input-group">
                                            <i className="bi bi-search"></i>
                                            <input type="text" className="form-control" placeholder="Procurar..."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="container mt-3">
                                        <div className="icon-combo-button">
                                            <i className="bi bi-folder-fill" onClick={() => console.log('pastas')}></i>
                                            <div className="divider"></div>
                                            <i className="bi bi-file-earmark"
                                               onClick={() => console.log('arquivos')}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                        <button className="btn btn-primary" type="button">
                                            <i className="bi bi-folder-plus m-1"></i>
                                            Nova Pasta
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="containerItem">
                            <div className="item">
                                <i className="bi bi-folder-fill m-1"></i>
                                <h1>Nova Pasta</h1>
                            </div>
                            <div className="item">
                                <i className="bi bi-folder-fill m-1"></i>
                                <h1>Nova Pasta</h1>
                            </div>
                            <div className="item">
                                <i className="bi bi-folder-fill m-1"></i>
                                <h1>Nova Pasta</h1>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="containerItem">
                            <div className="item">
                                <i className="bi bi-file-earmark-fill m-1"></i>
                                <h1>Nova Pasta</h1>
                            </div>
                            <div className="item">
                                <i className="bi bi-file-earmark-fill m-1"></i>
                                <h1>Nova Pasta</h1>
                            </div>
                            <div className="item">
                                <i className="bi bi-file-earmark-fill m-1"></i>
                                <h1>Nova Pasta</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
