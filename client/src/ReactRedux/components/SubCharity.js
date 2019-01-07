import React from 'react';
import { Pie} from 'react-chartjs-2'

import {
  Button, 
  Row, Col, Container
} from 'reactstrap';

class SubCharity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      value: "",
    }
  };
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }

  render() {
      return (
      

      <Container>
     
        <Row className="subRow" style={{backgroundColor: "#F2F3F9", width:"1200px"}}>
          <Col xs="3"><div style={{backgroundColor: "#F2F3F9", marginLeft:"5px", marginTop:"10px", marginBottom:"10px", float:"inherit"}}>
              <img style={{width: "100%", marginLeft:"25px", marginTop:"25px", marginBottom:"25px"}} src={this.props.item.image} alt=""/>
          </div>
          
          </Col>
          <Col xs="5">
          <div  style={{backgroundColor: "#F2F3F9", marginLeft:"5px", marginTop:"10px", marginBottom:"10px", float:"inherit"}}>
             <h5 style={{marginLeft:"25px", marginTop:"30px"}}><strong>{this.props.item.name}</strong> </h5> 
             <p style={{marginLeft:"25px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy . </p> 
             <h6 style={{marginLeft:"25px"}}>{this.props.item.amount}</h6> 
             <p style={{marginLeft:"25px"}}>{this.props.item.location} </p> 
             <Button style={{float:"left", marginBottom:"23px", marginLeft:"25px", backgroundColor: "#FFC44F !important"}} >DONATE</Button>{' '}
          </div>
          </Col>
          <Col xs="4">
          <div  style={{backgroundColor: "#F2F3F9", marginRight:"0px"}}>
             {/* <p style={{marginLeft:"25px"}}> here the chart </p>  */}
          <Pie
          style={{marginTop:"200px"}}
          data={{
        labels: ['Amount', 'Fund'],
        datasets:[
          {
            label:'Amount',
            data:[
              this.props.item.amount,
              5000,
             
             
            ],
            backgroundColor:[
              'rgba(74, 20, 140,0.6)',
              'rgba(74, 20, 140, 1)',
              'rgba(255, 206, 86, 0.6)',
              // 'rgba(75, 192, 192, 0.6)',
              // 'rgba(153, 102, 255, 0.6)',
              // 'rgba(255, 159, 64, 0.6)',
              // 'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }}
          //data.datasets.data[0] ={this.props.item.amount}
          options={{
            title:{
              display:this.props.displayTitle,
              fontSize:12
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
          </div>

          </Col>
        </Row>
       
      </Container>
      );
    }
};

export default SubCharity;