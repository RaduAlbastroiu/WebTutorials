// Survey new shows survey form

import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return <SurveyFormReview />;
    }
    return <SurveyForm />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
