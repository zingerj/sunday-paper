import React, { Component } from 'react'
import {
    OnlineContainer,
    LoadingContainer,
    LoadingText,
    LoadingImage,
    IconAppear
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Online extends Component {
    render () {
        const { loading, error } = this.props
        let content

        if (loading) {
            content = (
                <LoadingContainer>
                    <LoadingText>
                        Extra! Extra!<br />
                        Printing your Sunday Paper...
                        </LoadingText>
                    <LoadingImage><span role="img" aria-label="newspaper">📰</span></LoadingImage>
                </LoadingContainer>
            )
        } else if (error) {
            content = (
                <LoadingContainer>
                    <LoadingText>
                        Whoops! Looks like something went wrong. Check your link and try again.
                    </LoadingText>
                    <IconAppear>
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            size='5x'
                            color='red'
                        />
                    </IconAppear>
                </LoadingContainer>
            )
        } else {
            content = (
                <LoadingContainer>
                    <LoadingText>
                        You're all set! To enjoy your paper distraction free, please disable your internet.
                        </LoadingText>
                    <IconAppear>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            size='5x'
                            color='green'
                        />
                    </IconAppear>
                </LoadingContainer>
            )
        }

        return (
            <OnlineContainer>
                {content}
            </OnlineContainer>
        )
    }
}

export default Online