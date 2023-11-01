import React from 'react';
import "./Footer.css" 


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Ochuodho</h4>
                        <ul className="list-unstyled">
                            <li>0707070707</li>
                            <li>Nairobi</li>
                            <li>Juja</li>

                        </ul>
                    </div>
                    <div className="col">
                        <h4>Ochuodho</h4>
                        <ul className="list-unstyled">
                            <li>0707070707</li>
                            <li>Nairobi</li>
                            <li>Juja</li>

                        </ul>
                    </div>
                    <div className="col">
                        <h4>Ochuodho</h4>
                        <ul className="list-unstyled">
                            <li>0707070707</li>
                            <li>Nairobi</li>
                            <li>Juja</li>

                        </ul>
                    </div>
              </div>
              <hr/>
              <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} OCHUODHONGENOIQRA | All rights reserved | Terms of Service | Privacy


                </p>

              </div>
            </div>
        </div>
    )
}

export default Footer;
