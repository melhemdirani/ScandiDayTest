import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.extention.style';
import CheckoutStep from './CheckOutStep.component';


class Checkout extends SourceCheckout {
  
    renderCheckoutSteps()  {
        const currentStep = this.props.checkoutStep
        let steps = Object.keys(this.stepMap)
        return (
            <CheckoutStep currentStep={currentStep} steps={steps}/>

        )

    }

    render(){
        
        return(
           <main block="Checkout">
                { this.renderCheckoutSteps() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        )
    }
}

export default Checkout;
