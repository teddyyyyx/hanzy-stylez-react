import React, {useState} from 'react'
import arrowIcon from '../../Assets/carousell-arrow.png'
import './dropdowns.css'
export const Dropdowns = () => {
    const [openDropdowns, setOpenDropdowns] = useState([]);

    const toggleDropdown = (index) => {


        if (openDropdowns.includes(index)) {
            setOpenDropdowns(openDropdowns.filter(i => i !== index));

        } else {
            setOpenDropdowns([...openDropdowns, index]);
        }
    };

  return (
    <div className='dropdown'>
        

        {/* {openDropdown === 1 && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>} */}

        <div>
            <div className='dropdown-container' onClick={()=> toggleDropdown(1)}>
                <div>Details</div>
                <img src={arrowIcon} alt="" className={`arrow-icon ${openDropdowns.includes(1) ? 'rotated' : ''}`}/>
            </div>

            {openDropdowns.includes(1) && <div className="dropdown-content">
                <div className='dropdown-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#111111"><path d="m250-569-63 35q-14 8-29.5 4.5T136-546L67-665q-8-14-4.5-24T79-707l228-133h64q11 0 17.5 6.5T395-816v15q0 38 24 62t62 24q38 0 61.5-24t23.5-62v-15q0-11 6.5-17.5T590-840h64l228 133q13 8 16 18t-4 24l-70 119q-6 13-25 17t-30-3l-62-39v412q0 16-12 27.5T667-120H289q-16 0-27.5-11.5T250-159v-410Zm60-102v491h337v-491l138 77 45-78-187-107h-18q-8 54-47.5 89T481-655q-57 0-97-35t-48-89h-18L131-672l45 78 134-77Zm171 191Z"/></svg>
                    Discover our stylish and comfortable clothing collection, crafted from high-quality materials to ensure durability and a perfect fit.
                </div>
                <br /> <br />
                <div className='dropdown-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#111111"><path d="M294-242 70-466l43-43 181 181 43 43-43 43Zm170 0L240-466l43-43 181 181 384-384 43 43-427 427Zm0-170-43-43 257-257 43 43-257 257Z"/></svg>
                    Each piece is designed with attention to detail, offering a range of sizes and colors to suit your unique style. 
                </div>
                <br /><br />
                Shop now and experience the blend of fashion and functionality!
            </div>}
        </div>

        <hr />

        <div>
            <div className='dropdown-container' onClick={()=> toggleDropdown(2)}>
                <div>Care</div>
                <img src={arrowIcon} alt="" className={`arrow-icon ${openDropdowns.includes(2) ? 'rotated' : ''}`}/>
            </div>
            
            {openDropdowns.includes(2) && <div className="dropdown-content">
                <div className='dropdown-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#111111"><path d="M165-480 45-688l264-152h51q16 45 45 82.5t75 37.5q47 0 76-37.5t44-82.5h51l263 153-119 207-75-41v216l-60 51v-369l113 62 59-104-188-110q-26 53-70 84t-94 31q-49 0-93.5-31T316-775L127-665l61 104 112-62v225q-15 2-30.5 6.5T240-380v-141l-75 41Zm22 291-39-46 79-67q23-19 51-29t57-10q29 0 56.5 10t50.5 29l116 99q14 12 31.5 17.5T626-180q18 0 36-5.5t32-17.5l79-69 39 47-79 67q-23 19-50.5 28.5T626-120q-29 0-57-9.5T518-158l-115-99q-14-12-32-17.5t-36-5.5q-19 0-36.5 5.5T267-257l-80 68Zm293-471Z"/></svg>
                    Care for your clothes by washing with like colors in cold water on a gentle cycle, using mild detergents, and avoiding bleach. 
                </div>
                <br /> <br />
                <div className='dropdown-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#111111"><path d="M280-80v-249h-71q-36 0-62.5-24.5T120-414q0-27 13.5-50.5T172-499l281-120v-42q-37-10-60.5-40.5T369-770q0-46 33-78t79-32q46 0 79 32t33 78h-60q0-21-15.5-35.5T481-820q-21 0-36.5 14.5T429-770q0 23 15.5 38.5T483-716q12 0 21 8.5t9 20.5v68l275 120q25 11 38.5 34.5T840-414q0 36-26.5 60.5T751-329h-71v249H280Zm-71-309h71v-51h400v51h71q11 0 20-7.5t9-18.5q0-9-5-16t-13-11L483-568 198-442q-8 4-13 11t-5 15q0 11 8.5 19t20.5 8Zm131 249h280v-240H340v240Zm0-240h280-280Z"/></svg>
                    Air dry or use low heat in the dryer, and iron on low settings while avoiding prints and embellishments to keep your garments vibrant and durable!        
                </div>
                <ul>
                    <li>Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth</li>
                    <li>Store in the provided flannel bag or box</li>
                    <li>Clean with a soft, dry cloth</li>
                </ul>
            </div>}
        </div>


         <hr />


        <div>
            <div className='dropdown-container' onClick={()=> toggleDropdown(3)}>
                <div>Shippng & Return</div>
                <img src={arrowIcon} alt="" className={`arrow-icon ${openDropdowns.includes(3) ? 'rotated' : ''}`}/>
            </div>

            {openDropdowns.includes(3) && <div className="dropdown-content">
                
                <div className='dropdown-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#FFFFF"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/></svg>
                    <p>Free nationwide delivery on all orders above ₱1999!</p>
                </div>
   
                <ul>
                    <li>Standard delivered 5-9 Business Days</li>
                    <li>    Express delivered 2-4 Business Days</li>
                </ul> <br />


                <div className='dropdown-flex'>
                    <svg width="35px" height="35px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M731.25 547.39v72.93H475.06v54.59c0 19.89 4.93 38.51 13.04 55.34h-38.49l-194.73-128c-28.84-18.98-65.64-20.57-96.07-4.18a93.73 93.73 0 0 0-49.29 82.57c0 32.05 16.09 61.54 43.04 78.88l238.79 153.77h339.9v36.57H914.1V547.39H731.25z m-318.4 292.75l-220.7-142.12a20.6 20.6 0 0 1-9.48-17.38c0-11.12 7.59-16.43 10.86-18.2 3.29-1.73 11.88-5.18 21.18 0.91l213.02 140.04h230.7v-73.14h-0.71v-0.04h-54.2c-23.98 0-44.46-15.36-52.11-36.75h179.85v146.68H412.85z m428.11 36.57h-36.57V620.53h36.57v256.18zM232.17 501.66c-20.46-35.7-31.27-76.48-31.27-117.95C200.9 252.64 307.51 146 438.54 146 569.6 146 676.2 252.64 676.2 383.71c0 41.43-10.8 82.21-31.25 117.91l63.46 36.36c26.79-46.77 40.93-100.11 40.93-154.27 0-171.41-139.43-310.86-310.8-310.86S127.76 212.3 127.76 383.71c0 54.2 14.16 107.55 40.95 154.3l63.46-36.35z" fill="#11111" /><path d="M336.22 350.91l-48.78 54.48 136.73 122.47 170.36-195.97-55.22-48-121.64 139.97z" fill="#111111" /></svg>
                    <p>Get Free returns on all orders. No questions asked!</p>
                </div>
                <ul>
                    <li>Items received within 15 days from the delivered date.</li>
                    <li>Items received unused, undamaged and in the original package.</li>
                </ul>
            </div>} 
        </div>
        


        <hr />

        <div>
            <div className='dropdown-container' onClick={()=> toggleDropdown(4)}>
                <div>Payment Options</div>
                <img src={arrowIcon} alt="" className={`arrow-icon ${openDropdowns.includes(4) ? 'rotated' : ''}`}/>
            </div>

            {openDropdowns.includes(4) && <div className="dropdown-content">
            
            <div className='dropdown-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#111111"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
                Hanzy accepts multiple forms of payment for online purchases:
            </div>
                
                <ul>
                    <li>GCash</li>
                    <li>PayMaya</li>
                    <li>Visa</li>
                    <li>American Express</li>
                    <li>MasterCard</li>
                    <li>Paypal</li>
                    <li>Apple Pay</li>
                    <li>Amazon Pay</li>
                </ul>
                <br />
                When placing an order, your billing address must match the information linked to your payment method. If your payment is declined, please contact your bank or financial institution for assistance.
            </div>}
        </div>
        
    </div>
  )
}
