import React from "react";
export default class Body extends React.Component {

  render() {
   let color;
   if (this.props.status === 'warning') {
     color = '#DBA026';
   }
   if (this.props.status === 'critical') {
     color = '#BA0000';
   }
   if (this.props.status === 'success') {
     color = '#07a547';
   }
    return (
      <div style={{padding: '10px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.117647)'}}>
        <div style={{display: 'inline-block'}} className='device-health-color'>
          <div className="mark" style={{backgroundColor: color, width: '7px', height: '41px'}}></div>
        </div>
        <div style={{display: 'inline-block', paddingLeft: '13px'}} className='device-health-info'>
          <p className='company-name'>Company: {this.props.company}</p>
          <span className='backup-acc'>{this.props.backupAcc} > {this.props.dataSet}</span>
          <span style={{marginLeft: '12px'}} className="date-time">{this.props.date} {this.props.time}</span>
        </div>
      </div>
    );
  }
}
