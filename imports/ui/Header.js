import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="intro">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div id="opacity"></div>
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img src="https://www.w3schools.com/bootstrap/la.jpg" alt="Los Angeles" style={{width:"100%"}} />
            </div>

            <div className="item">
              <img src="https://www.w3schools.com/bootstrap/chicago.jpg" alt="Chicago" style={{width:"100%"}} />
            </div>

            <div className="item">
              <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="New york" style={{width:"100%"}} />
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="intro-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1 className="brand-heading">Grayscale</h1>
                        <p className="intro-text">A free, responsive, one page Bootstrap theme.
                            <br/>Created by Start Bootstrap.</p>
                        <a href="#about" className="btn btn-circle page-scroll">
                            <i className="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
  }
};
