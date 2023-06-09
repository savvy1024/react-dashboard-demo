import React from 'react'
import './progressbar.scss'
import {useRef,useEffect} from 'react'


const ProgressBar = ({ value }) => {
    const barInnerRef = useRef()

    useEffect(() => {
        barInnerRef.current.style.width = `${value}%`
    }, [])

    return (
        <div className='progress-bar'>
            <div ref={barInnerRef} className="progress-bar__inner"></div>
        </div>
    )
}

export default ProgressBar