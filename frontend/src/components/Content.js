import React, { Component, Fragment } from 'react'

class Content extends Component {
    render () {
        const { articles } = this.props

        const articleEls = articles && articles.map(a => (
            <Fragment key={a.link}>
                <h1>{a.title}</h1>
                <h3>{a.author}</h3>
                <p>{a.content}</p>
            </Fragment>
        ))

        return (
            <div>
                {articleEls}
            </div>
        )
    }
}

export default Content