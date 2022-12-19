

const lengthUnitConverter = ()=>{
    const TolengthUnit = document.getElementById('TolengthUnit').value
    const fromLengthUnit = document.getElementById('fromLengthUnit').value
    const unitLengthResult = document.getElementById('unitLengthResult')
    const unitlengthInput = document.getElementById('unitlengthInput').value
    console.log(fromLengthUnit,TolengthUnit)

    if(fromLengthUnit === "meter" && TolengthUnit === "kilometer"){
     unitLengthResult.innerText = `${unitlengthInput}m in kilometer is ${unitlengthInput/1000}km `
    }
     else if(fromLengthUnit === 'meter'&& TolengthUnit === 'centimeter'){
        unitLengthResult.innerText = `${unitlengthInput}m in centimeter is ${unitlengthInput/0.01}cm `
    }
   else if(fromLengthUnit === 'meter'&& TolengthUnit === 'meter'){
        unitLengthResult.innerText = `${unitlengthInput}m in meter is ${unitlengthInput}m `
    }
    else if(fromLengthUnit === 'meter'&& TolengthUnit === 'feet'){
        unitLengthResult.innerText = `${unitlengthInput} m in feet is ${unitlengthInput*3.2808} ft `
    }
    else if(fromLengthUnit === 'kilometer'&& TolengthUnit === 'kilometer'){
        unitLengthResult.innerText = `${unitlengthInput} km in kilometer is ${unitlengthInput} km `
    }
    else if(fromLengthUnit === 'kilometer'&& TolengthUnit === 'meter'){
        unitLengthResult.innerText = `${unitlengthInput} km in meter is ${unitlengthInput*1000} m `
    }
    else if(fromLengthUnit === 'kilometer'&& TolengthUnit === 'centimeter'){
        unitLengthResult.innerText = `${unitlengthInput} km in centimeter is ${unitlengthInput*100000} cm `
    }
    else if(fromLengthUnit === 'kilometer'&& TolengthUnit === 'feet'){
        unitLengthResult.innerText = `${unitlengthInput} km in feet is ${unitlengthInput*3280.8} ft `
    }
    else if(fromLengthUnit === 'centimeter'&& TolengthUnit === 'centimeter'){
        unitLengthResult.innerText = `${unitlengthInput} cm in centimeter is ${unitlengthInput} cm `
    }
    else if(fromLengthUnit === 'centimeter'&& TolengthUnit === 'meter'){
        unitLengthResult.innerText = `${unitlengthInput} cm in meter is ${unitlengthInput/100} m `
    }
    else if(fromLengthUnit === 'centimeter' &&  TolengthUnit === 'kilometer'){
        unitLengthResult.innerText = `${unitlengthInput} cm in kilometer is ${unitlengthInput/100000} km `
    }
    else if(fromLengthUnit === 'centimeter' &&  TolengthUnit === 'feet'){
        unitLengthResult.innerText = `${unitlengthInput} cm in feet is ${unitlengthInput*0.032808} ft `
    }
    else if(fromLengthUnit === 'feet' &&  TolengthUnit === 'feet'){
        unitLengthResult.innerText = `${unitlengthInput} ft in feet is ${unitlengthInput} ft `
    }
    else if(fromLengthUnit === 'feet' &&  TolengthUnit === 'meter'){
        unitLengthResult.innerText = `${unitlengthInput} feet in meter is ${unitlengthInput/3.2808} m `
    }
    else if(fromLengthUnit === 'feet' &&  TolengthUnit === 'kilometer'){
        unitLengthResult.innerText = `${unitlengthInput} feet in kilometer is ${unitlengthInput/3280.8} km `
    }
    else if(fromLengthUnit === 'feet' &&  TolengthUnit === 'centimeter'){
        unitLengthResult.innerText = `${unitlengthInput} feet in centimeter is ${unitlengthInput/0.032808} cm `
    }

}


const weightUnitConverter = ()=>{
    const unitWeightInput = document.getElementById('unitWeightInput').value
    const fromWeightUnit  = document.getElementById('fromWeightUnit').value
    const ToWeightUnit = document.getElementById('ToWeightUnit').value
    const unitWeightResult = document.getElementById('unitWeightResult')

    if(fromWeightUnit === 'kilogram' && ToWeightUnit === 'kilogram'){
        unitWeightResult.innerText = `${unitWeightInput} kg in kilogram is ${unitWeightInput} kg`
    }
    else if(fromWeightUnit === 'grams' && ToWeightUnit === 'grams'){
        unitWeightResult.innerText =  `${unitWeightInput} g in gram is ${unitWeightInput} g`
    }
    else if(fromWeightUnit === 'pounds' && ToWeightUnit === 'pounds'){
        unitWeightResult.innerText =  `${unitWeightInput} lb in pounds is ${unitWeightInput} lb`
    }
    else if(fromWeightUnit === 'pounds' && ToWeightUnit === 'kilogram'){
        unitWeightResult.innerText =  `${unitWeightInput} lb in kilogram is ${unitWeightInput/2.2046} lb`
    }
    else if(fromWeightUnit === 'pounds' && ToWeightUnit === 'grams'){
        unitWeightResult.innerText =  `${unitWeightInput} lb in grams is ${unitWeightInput/0.0022046} lb`
    }
    else if(fromWeightUnit === 'grams' && ToWeightUnit === 'kilogram'){
        unitWeightResult.innerText =  `${unitWeightInput} g in kilogram is ${unitWeightInput/1000} kg`
    }
    else if(fromWeightUnit === 'grams' && ToWeightUnit === 'pounds'){
        unitWeightResult.innerText =  `${unitWeightInput} g in pounds is ${unitWeightInput*0.0022046} lb`
    }
    else if(fromWeightUnit === 'kilogram' && ToWeightUnit === 'grams'){
        unitWeightResult.innerText = `${unitWeightInput} kg in grams is ${unitWeightInput*1000} g`
    }
    else if(fromWeightUnit === 'kilogram' && ToWeightUnit === 'pounds'){
        unitWeightResult.innerText = `${unitWeightInput} kg in pounds is ${unitWeightInput*2.2046} lb`
    }
}