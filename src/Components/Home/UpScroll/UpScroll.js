import React from 'react'
import './UpScroll.css';
const UpScroll = () => {
  return (
    <div className='Upscroll'>
      <button className='scr-btn1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M9 22L9.00192 17.9976C9.00236 17.067 9.00258 16.6017 9.15462 16.2347C9.35774 15.7443 9.74746 15.3547 10.2379 15.1519C10.6051 15 11.0704 15 12.001 15V15C12.9319 15 13.3974 15 13.7647 15.152C14.2553 15.355 14.645 15.7447 14.848 16.2353C15 16.6026 15 17.0681 15 17.999V22" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.08848 4.76243L6.08847 5.54298C4.57181 6.72681 3.81348 7.31873 3.40674 8.15333C3 8.98792 3 9.95205 3 11.8803V13.9715C3 17.7562 3 19.6485 4.17157 20.8243C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8243C21 19.6485 21 17.7562 21 13.9715V11.8803C21 9.95205 21 8.98792 20.5933 8.15333C20.1865 7.31873 19.4282 6.72681 17.9115 5.54298L16.9115 4.76243C14.5521 2.92081 13.3724 2 12 2C10.6276 2 9.44787 2.92081 7.08848 4.76243Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg><p className='btn-t'>&nbsp;Home</p></button>
      <button className='scr-btn2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M2.5 6L8 4L13.5 6L11 7.5V9C11 9 10.3333 8.5 8 8.5C5.66667 8.5 5 9 5 9V7.5L2.5 6ZM2.5 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 8.5V9.38889C11 11.1071 9.65685 12.5 8 12.5C6.34315 12.5 5 11.1071 5 9.38889V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.3182 11.0294C15.3182 11.0294 15.803 10.6765 17.5 10.6765C19.197 10.6765 19.6818 11.0294 19.6818 11.0294M15.3182 11.0294V10L13.5 9L17.5 7.5L21.5 9L19.6818 10V11.0294M15.3182 11.0294V11.3182C15.3182 12.5232 16.295 13.5 17.5 13.5C18.705 13.5 19.6818 12.5232 19.6818 11.3182V11.0294" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.38505 15.926C3.44187 16.4525 0.96891 17.5276 2.47511 18.8729C3.21087 19.53 4.03033 20 5.06058 20H10.9394C11.9697 20 12.7891 19.53 13.5249 18.8729C15.0311 17.5276 12.5581 16.4525 11.6149 15.926C9.40321 14.6913 6.59679 14.6913 4.38505 15.926Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 20H19.7048C20.4775 20 21.0921 19.624 21.6439 19.0983C22.7736 18.0221 20.9189 17.162 20.2115 16.7408C18.9362 15.9814 17.3972 15.8059 16 16.2141" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg><p className='btn-t'>&nbsp;Colleges</p></button>
      <button className='scr-btn2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M5 7.66667C5 7.04669 5 6.73669 5.06815 6.48236C5.25308 5.79218 5.79218 5.25308 6.48236 5.06815C6.73669 5 7.04669 5 7.66667 5H16.3333C16.9533 5 17.2633 5 17.5176 5.06815C18.2078 5.25308 18.7469 5.79218 18.9319 6.48236C19 6.73669 19 7.04669 19 7.66667C19 8.90663 19 9.52661 18.8637 10.0353C18.4938 11.4156 17.4156 12.4938 16.0353 12.8637C15.5266 13 14.9066 13 13.6667 13H10.3333C9.09337 13 8.47339 13 7.96472 12.8637C6.58436 12.4938 5.50617 11.4156 5.1363 10.0353C5 9.52661 5 8.90663 5 7.66667Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M18 11C18.3716 11.5839 18.5574 11.8759 18.689 12.1897C18.8062 12.4694 18.8913 12.7615 18.9425 13.0604C19 13.3959 19 13.7419 19 14.4341V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V14.4341C5 13.7419 5 13.3959 5.0575 13.0604C5.10874 12.7615 5.1938 12.4694 5.31105 12.1897C5.44263 11.8759 5.62842 11.5839 6 11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 20C4.32352 20 3.98528 20 3.70219 19.922C3.08287 19.7512 2.58068 19.3162 2.34157 18.7433C2.23227 18.4815 2.19862 18.1593 2.1313 17.515L2.06691 16.8986C1.98995 16.1619 1.95147 15.7936 2.1089 15.5209C2.46075 14.9115 3.25125 15.0052 3.85704 15.0052H5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19 20C19.6765 20 20.0147 20 20.2978 19.9219C20.9171 19.751 21.4193 19.3155 21.6584 18.742C21.7677 18.4799 21.8014 18.1574 21.8687 17.5124L21.9331 16.8954C21.9955 16.2975 22.1529 15.5626 21.5709 15.1773C21.3031 15 20.9164 15 20.143 15H19" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 14.5L9 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 14.5L15 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5" stroke="currentColor" strokeWidth="1.5" />
</svg><p className='btn-t'>&nbsp;Schools</p></button>
      <button className='scr-btn2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M5.08069 15.2964C3.86241 16.0335 0.668175 17.5386 2.61368 19.422C3.56404 20.342 4.62251 21 5.95325 21H13.5468C14.8775 21 15.936 20.342 16.8863 19.422C18.8318 17.5386 15.6376 16.0335 14.4193 15.2964C11.5625 13.5679 7.93752 13.5679 5.08069 15.2964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 5L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 8L22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 11L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg><p className='btn-t'>&nbsp;Students</p></button>
      <button className='scr-btn2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M16 10L18.1494 10.6448C19.5226 11.0568 20.2092 11.2628 20.6046 11.7942C21 12.3256 21 13.0425 21 14.4761V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8 9L11 9M8 13L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22V19C12 18.0572 12 17.5858 11.7071 17.2929C11.4142 17 10.9428 17 10 17H9C8.05719 17 7.58579 17 7.29289 17.2929C7 17.5858 7 18.0572 7 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2 22L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 22V6.71724C3 4.20649 3 2.95111 3.79118 2.32824C4.58237 1.70537 5.74742 2.04355 8.07752 2.7199L13.0775 4.17122C14.4836 4.57937 15.1867 4.78344 15.5933 5.33965C16 5.89587 16 6.65344 16 8.16857V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg><p className='btn-t'>&nbsp;Company's</p></button>
      <button className='scr-btn2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M15 2H9C5.69067 2 5 2.69067 5 6V22H19V6C19 2.69067 18.3093 2 15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 22V19C15 17.3453 14.6547 17 13 17H11C9.34533 17 9 17.3453 9 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M13.5 6H10.5M13.5 9.5H10.5M13.5 13H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg><p className='btn-t'>&nbsp;Startup's</p></button>
      <button className='scr-btn2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M11.0065 21.0001H9.60546C6.02021 21.0001 4.22759 21.0001 3.11379 19.8652C2 18.7302 2 16.9035 2 13.2501C2 9.59674 2 7.77004 3.11379 6.63508C4.22759 5.50012 6.02021 5.50012 9.60546 5.50012H13.4082C16.9934 5.50012 18.7861 5.50012 19.8999 6.63508C20.7568 7.50831 20.9544 8.79102 21 11.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20.0167 20.0233L21.9998 22M21.0528 17.5265C21.0528 15.5789 19.4739 14 17.5263 14C15.5786 14 13.9998 15.5789 13.9998 17.5265C13.9998 19.4742 15.5786 21.0531 17.5263 21.0531C19.4739 21.0531 21.0528 19.4742 21.0528 17.5265Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 14.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5" stroke="currentColor" strokeWidth="1.5" />
</svg><p className='btn-t'>&nbsp;Job's</p></button>
<button className='scr-btn3'>+</button>
    </div>
  )
}

export default UpScroll