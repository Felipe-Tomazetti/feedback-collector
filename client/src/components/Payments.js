import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';
import { connect } from 'react-redux';

const Payment = (props) => {

  return (
    <StripeCheckout 
      amount={500}
      token={token => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      name="Feedback Collector"
      description='5$ for 5 credits'
    > 
      <button className='btn'>
        Add Credits
      </button>
    </StripeCheckout>
  )
};


export default connect(null, actions)(Payment);