import React from 'react'

const ShowCal = ({ items, activeClass, OnClick }) => {
    const handleClick = () => {
        OnClick()
    }
    return (
        <>
            <button className={activeClass} onClick={handleClick}>
                {items}
            </button>
        </>
    )
}

export default ShowCal
