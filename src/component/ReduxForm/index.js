import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class ReduxForm extends Component {
  renderInput({ input }) {
    return (
      <input { ...input } />
    )
   }
  render() {
    // console.log(this.props)
    return (
      <div>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </div>
    );
  }
}

export default reduxForm({
  form: 'reduxForm'
})(ReduxForm)
