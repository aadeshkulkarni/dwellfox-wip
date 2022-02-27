import React from 'react'

const GradientContainer = ({ index, children }) => {
    let gradient = 'blueGradient'
    // switch (index) {
    //     case 0: {
    //         gradient = 'blueGradient'
    //         break;
    //     }
    //     case 1: {
    //         gradient = 'grayGradient'
    //         break;
    //     }
    //     case 2: {
    //         gradient = 'creamGradient'
    //         break;
    //     }
    //     case 3: {
    //         gradient = 'grayGradient'
    //         break;
    //     }
    //     case 4: {
    //         gradient = 'amberGradient'
    //         break;
    //     }
    //     case 5: {
    //         gradient = 'purpleGradient'
    //         break;
    //     }
    //     case 6: {
    //         gradient = 'creamGradient'
    //         break;
    //     }
    //     case 7: {
    //         gradient = 'grayGradient'
    //         break;
    //     }
    //     default:
    //         break;
    // }
    return (
            <div className={`rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-2 lg:p-0 bg-gradient-to-r ${gradient}`}>{children}</div>
    )
}

export default GradientContainer