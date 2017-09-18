import React from 'react';
import NavBar from './NavBar';

export default class TourismRoutes extends React.Component{
  render() {
      return(
        <div>
          <NavBar/>
          <section id="download" className="content-section text-center">
            <h1>4km</h1>
              <div className="km4-section">
                  <div className="container">
                      <div className="col-lg-8 col-lg-offset-2">
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                      </div>
                  </div>
              </div>
              <div className="text-center col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12">
                <button className="btn-default showcase-btn">Take Tour</button>
              </div>
          </section>
          <section id="download" className="content-section text-center">
            <h1>12km</h1>
              <div className="km12-section">
                  <div className="container">
                      <div className="col-lg-8 col-lg-offset-2">
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                      </div>
                  </div>
              </div>
              <div className="text-center col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12">
                <button className="btn-default showcase-btn">Take Tour</button>
              </div>
          </section>
          <section id="download" className="content-section text-center">
            <h1>17km</h1>
              <div className="km17-section">
                  <div className="container">
                      <div className="col-lg-8 col-lg-offset-2">
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                      </div>
                  </div>
              </div>
              <div className="text-center col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12">
                <button className="btn-default showcase-btn">Take Tour</button>
              </div>
          </section>
        </div>
      );
  };
};
