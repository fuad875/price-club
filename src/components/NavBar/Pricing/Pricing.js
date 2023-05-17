import React from 'react';
import PriceOption from '../../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption =[
        {id:1,name:'Free' ,price:0, features:[
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Reature',
            'Will Never use',
            'Hudai feature',
            'Ajarira Feature'
        ]},
        {id:2,name:'Medium' ,price:9.99 , features:[
            'Everything on Free',
            'Extra Feature',
            'Unnecessary Reature',
            'Will Never use',
            'Hudai feature',
            'Ajarira Feature'
        ]},
        {id:3,name:'Premium' ,price:19.99 , features:[
            'Everything on exclusive',
            'Extra Feature',
            'Unnecessary Reature',
            'Will Never use',
            'Hudai feature',
            'Ajarira Feature'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold m-3 rounded-md bg-indigo-300 p-12 text-white'>
              Best Deal of the Town
            </h2>
         <div className='grid  md:grid-cols-3 gap-3 mt-4'>
            {
                pricingOption.map(option =><PriceOption
                key={option.id}
                option ={option}
                ></PriceOption>)
            }
         </div>
        </div>
    );
};

export default Pricing;