import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$$$"
        amount={499}
        token={token => console.log(token)}
        // it is a public key, should be in env
        stripeKey={'pk_test_HkKV4H0AnGWpjeJQaXvH1vhA00bCJJ8K9x'}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
