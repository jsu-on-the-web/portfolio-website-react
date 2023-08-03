import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

export const LandingSection = () => {
    return (
        <>
            <section className="landing">
                {/* Add a picture of a rotating computer monitor here */}
                <img src="https://picsum.photos/id/684/600/400" alt="" />
                <div className="landing__text">
                    <h2 className="landing__command"></h2>
                    <h3 className="landing__message landing__message--first"></h3>
                    <h3 className="landing__message landing__message--second"></h3><span>
                        <FontAwesomeIcon icon={faWindowMinimize} className="landing__title--cursoricon fa-fade" /></span>
                </div>
            </section>
        </>
    )
}

export default LandingSection