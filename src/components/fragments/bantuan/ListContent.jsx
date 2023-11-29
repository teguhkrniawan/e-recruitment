import React from 'react'
import Faq from './Faq'

const ListContent = (props) => {

    const { data, handleClick, stateAccordion } = props

    return (
        <div className='p-3 flex flex-col'>
            <ul>
                {
                    data.map((item) => (
                        <Faq key={item.id} question={item.question} answer={item.answer} id={item.id} handleClick={handleClick} stateAccordion={stateAccordion}  />
                    ))
                }
            </ul>
        </div>
    )
}

export default ListContent