import React from 'react'
const Input=React.forwardRef(({label,type},ref)=>{
    return (
        <div className="input-block">
            <label htmlFor="">{label}</label>
            <input required ref={ref} type={type}/>
          </div>
    )
})
export default Input