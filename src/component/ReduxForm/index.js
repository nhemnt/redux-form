import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class ReduxForm extends Component {
  renderInput({ input, label }) {
    return (
      <div className="label">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
   }
  render() {
    // console.log(this.props)
    return (
      <div>
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
      </div>
    );
  }
}

export default reduxForm({
  form: 'reduxForm'
})(ReduxForm)
