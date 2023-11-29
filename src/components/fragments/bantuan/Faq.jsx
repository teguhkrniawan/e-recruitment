import React from 'react'

const Faq = (props) => {

    const { question, answer, id, handleClick, stateAccordion } = props

    return (
        <li className='w-full mb-5 flex flex-col'>
            <div className="bg-red-500 text-white p-3 text-sm hover:underline hover:cursor-pointer" >
                {`${question }`}
            </div>
            {
                id != stateAccordion && (
                    <div className="border border-gray-300 p-3 text-sm text-justify">
                        { answer }
                    </div>
                )
            }
        </li>
    )
}

export default Faq