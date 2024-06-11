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
    <div>
        <div className='dropdown-container' onClick={()=> toggleDropdown(1)}>
            <div>Details</div>
            <img src={arrowIcon} alt="" className='arrow-icon'/>
        </div>
        {openDropdowns.includes(1) && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}

        {/* {openDropdown === 1 && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>} */}

    <hr />
        <div className='dropdown-container' onClick={()=> toggleDropdown(2)}>
            <div>Care</div>
            <img src={arrowIcon} alt="" className='arrow-icon'/>
        </div>
        {openDropdowns.includes(2) && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        {/* {openDropdown === 2 && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>} */}

    <hr />
        <div className='dropdown-container' onClick={()=> toggleDropdown(3)}>
            <div>Shippng & Return</div>
            <img src={arrowIcon} alt="" className='arrow-icon'/>
        </div>
        {openDropdowns.includes(3) && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}

        {/* {openDropdown === 3 && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>} */}

    <hr />
        <div className='dropdown-container' onClick={()=> toggleDropdown(4)}>
            <div>Details</div>
            <img src={arrowIcon} alt="" className='arrow-icon'/>
        </div>
        {openDropdowns.includes(4) && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}

        {/* {openDropdown === 4 && <div className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>} */}

    </div>
  )
}
