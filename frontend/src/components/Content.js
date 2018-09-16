import React, { Component, Fragment } from 'react'
import {
    ContentContainer,
    Header,
    Subtitle,
    Footer,
    Divider
} from './styled'
import { Article } from '.'

class Content extends Component {
    render () {
        const { articles } = this.props

        const articleEls = articles && articles.map((a, i) => (
            <Fragment key={i}>
                <Article data={a} />
                {i !== articles.length - 1 && <Divider />}
            </Fragment>
        ))

        return (
            <ContentContainer>
                <Header>Your Sunday Paper</Header>
                <Subtitle>Sunday, September 16, 2018</Subtitle>
                {articleEls}
                <Footer><span role="img" aria-label="wave">👋🏻</span> See you next week!</Footer>
            </ContentContainer>
        )
    }
}

export default Content