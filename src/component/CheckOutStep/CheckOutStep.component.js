import React, { Component } from 'react'

class CheckOutStep extends Component {

    splitName(text) {

        text.split("_")[0]
        let b = text.split("_")[0]
        let c = b.toLowerCase()
        let d = c.charAt(0).toUpperCase() + c.slice(1);

        return d;
    }
    indexOf(input) {
        return this.props.steps.indexOf(input);
    }

    render() {
       
        const { steps, currentStep } = this.props
        
        return (
            <div className="step">
                {steps.map((step, index) =>
                    <>
                        <div 
                            className={
                                index <= this.indexOf(currentStep) ? 
                                "line" 
                                : index == steps.length - 1 
                                ? "displayNone" 
                                : "gray_line"
                            }
                        />
                        <div className={index == 2 ? "displayNone" :"item"}>
                            <p className={index <= this.indexOf(currentStep) ? "index"  :"gray_index"}> 
                                { index < this.indexOf(currentStep) ? "✓"  : index == 2 ? "" : index + 1} 
                            </p>
                            <p 
                                className={
                                    index > this.indexOf(currentStep) 
                                    ? "billing dark_gray" 
                                    : "billing"
                                }
                            >{this.splitName(step)}</p>
                        </div>
                        <div 
                            className={
                                index < this.indexOf(currentStep) ||  this.indexOf(currentStep) === steps.length - 2 
                                ? "line" 
                                : index == steps.length - 1 
                                ? "displayNone"
                                : "gray_line"
                            }
                        />
                    </>
                )}
            </div>
        )
    }
}

export default CheckOutStep