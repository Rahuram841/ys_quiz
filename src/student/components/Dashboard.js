import React, { Component } from 'react';
import './Dashboard.css'
class Dashboard extends Component {
    render() {
        return (
            
    
    
            <div className="container" >

            <div className="row">
              
          
              <div className="col-md-4 col-xl-6">
                <div className="card bg-c-yellow order-card">
                  <div className="card-block">
                    <h6 className="m-b-20">Total Exams Available</h6>
                   <h2 className="text-right"><i className="fas fa-book f-left"></i><span>4</span></h2>
                    
                  </div>
                </div>
              </div>
          
              <div className="col-md-4 col-xl-6">
                <div className="card bg-c-pink order-card">
                  <div className="card-block">
                    <h6 className="m-b-20">Total Questions</h6>
                    <h2 className="text-right"><i className="fas fa-question-circle f-left"></i><span>5</span></h2>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        );
    }
}

export default Dashboard;