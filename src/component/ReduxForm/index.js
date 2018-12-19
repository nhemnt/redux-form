import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class ReduxForm extends Component {
  renderError({ error, touched }) {
    if (error && touched) { 
      return (
        <div>{error}</div>
      )
    }
  }
  renderInput = ({ input, label, meta }) => {
    // console.log(meta)
    return (
      <div className="label">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }
  onSubmit(propsValues) { 
    console.log(propsValues)
  }
  
  render() {
    // console.log(this.props)
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter Description" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {}
  console.log('yrp')
  if (!formValues.title) {
    console.log('here');
    errors.title= 'You must enter a title'
  }
  if (!formValues.description) { 
    errors.description = 'You must enter a description'
  }
  return errors
}

export default reduxForm({
  form: 'reduxForm',
  validate,
})(ReduxForm)
