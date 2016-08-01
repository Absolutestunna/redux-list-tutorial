import React from "react";
import {connect} from 'react-redux';
import createFragment from 'react-addons-create-fragment';
import Body from './Body';


//import actions
import * as action from './../actions/filterListAction';

@connect((state) => {
  return {
    list: state.companyInfo
  };
})

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successChecked: false,
      criticalChecked: false,
      warningChecked: false,
      showAllChecked: false,
    };
    this.criticalChange = this.criticalChange.bind(this);
    this.successChange = this.successChange.bind(this)
    this.warningChange = this.warningChange.bind(this)
    this.showAllChange = this.showAllChange.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(action.filterWarning())
  }
  criticalChange() {
    this.setState({criticalChecked: !this.state.criticalChecked});
    // this.props.dispatch(action.filterCritical())
  }
  successChange() {
    this.setState({successChecked: !this.state.successChecked})
  }
  warningChange() {
    this.setState({warningChecked: !this.state.warningChecked})
  }
  showAllChange() {
    this.setState({showAllChecked: !this.state.showAllChecked})
  }

  render() {
    console.log('list', this.props.list);
    const companyItems = this.props.list.map((co, i) =>
         <Body key={i}
           company={co.company}
               status={co.status}
               backupAcc={co.backupAcc}
               dataSet={co.dataSet}
               date={co.date}
               time={co.time}
          />
      )
    return (
      <div style={{marginTop: '130px', marginLeft: '130px'}}>
        {companyItems}
        <label className="checkbox-inline">
          <input type="checkbox" checked={this.state.criticalChecked} value="critical" onChange={this.criticalChange}/>Critical
        </label>

        <label className="checkbox-inline">
          <input type="checkbox" checked={this.state.warningChecked} value="warning" onChange={this.warningChange}/>Warning
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" checked={this.state.successChecked} value="success" onChange={this.successChange}/>Success
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" checked={this.state.showAll} value="showAll" onChange={this.showAllChange}/>Show All
        </label>
      </div>
    );
  }
}
