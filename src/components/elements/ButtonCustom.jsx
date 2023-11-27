import React from 'react'

const ButtonCustom = (props) => {

    const { text } = props

    return (
        <button className='bg-[#9e1e21] text-sm text-white px-4 py-2 rounded-full hover-bg-[] mt-3'>{ text }</button>
    )
}

export default ButtonCustom