import React from 'react';

export default class Header extends React.Component {
  render() {
    const styles = {
      imagesSlide: {
        minWidth:"100vw",
        minHeight: "100vh",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }
    }
    const { imagesSlide } = styles;
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
              <img src="/images/MainImage.jpg" alt="Los Angeles" style={imagesSlide} />
            </div>

            <div className="item">
              <img src="/images/mauri2.jpg" alt="Chicago" style={imagesSlide} />
            </div>

            <div className="item">
              <img src="/images/mauri3.jpg" alt="New york" style={imagesSlide} />
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
                        <h1 className="brand-heading">Peko</h1>
                        <p className="intro-text">Honduras, Turismo 5 estrellas.</p>
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
