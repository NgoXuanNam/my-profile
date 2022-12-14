import React from 'react';
import coffeshop from '~/assets/image/coffeeshop.png';
export default function CoffeeShop() {
    return (
        <div className="coffeeshop__content flex justify-center items-center w-[80%] min-h-[120px] bg-[#777373] ml-auto mr-auto text-[2.5rem] text-left p-6 leading-[5rem] rounded-[15px] mb-12">
            <div className="coffeeshop__content-box flex justify-center items-center">
                <div className="coffeeshop__content-img w-[50%]">
                    <img src={coffeshop} alt="img demo" className="w-[90%]" />
                </div>
                <div className="coffeeshop__content-desc w-[50%]">
                    <h2 className="text-[4.5rem] text-[#601d1d] font-medium">coffeeshop Market</h2>
                    <h4 className="text-[3rem] font-medium">Online coffeeshop Market</h4>
                    <p>- HTML/CSS/JavaScript</p>
                    <p>- Style Responsive</p>
                    <a
                        href="https://envato-market-nxn.netlify.app/"
                        className="p-4 text-center float-right"
                        target={'_blank'}
                    >
                        <button className="pl-3 pr-3 bg-slate-200 rounded-2xl">Live Demo</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
