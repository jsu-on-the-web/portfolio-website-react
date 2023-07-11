import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'LandingPage',
    Board: () => <div>
        <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={'landing-page__image'} />
    </div>,
    environmentProps: {
        canvasWidth: 407
    }
});
