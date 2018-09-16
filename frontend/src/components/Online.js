import React, { Component } from 'react'
import {
    OnlineContainer,
    LoadingContainer,
    LoadingText,
    LoadingImage,
    IconAppear
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class Online extends Component {
    render () {
        const { loading } = this.props

        return (
            <OnlineContainer>
                {loading
                    ? <LoadingContainer>
                        <LoadingText>
                            Extra! Extra!<br />
                            Printing your Sunday Paper...
                        </LoadingText>
                        <LoadingImage>📰</LoadingImage>
                    </LoadingContainer>
                    : <LoadingContainer>
                        <LoadingText>
                            You're all set! To enjoy your paper distraction free, please disable your internet.
                        </LoadingText>
                        <IconAppear>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                size='4x'
                                color='green'
                            />
                        </IconAppear>
                    </LoadingContainer>}
            </OnlineContainer>
        )
    }
}

export default Online