import React, { Component } from 'react'
import {
    ArticleContainer,
    Frost,
    ReadMore,
    ArticleTitle,
    ArticleAuthor,
    ArticleContent
} from './styled'

class Article extends Component {
    state = {
        expanded: false
    }

    expand = () => {
        const { data } = this.props
        const el = document.getElementById(data.link)
        const initial = el.getBoundingClientRect()

        el.style.height = 'auto'
        const final = el.getBoundingClientRect()
        el.style.height = '25vw'
    
        const diff = final.height - initial.height
        const DURATION = 400
        let start = ''
        let end = ''

        const tick = ts => {
            if (!start) {
                // Set start and end timestamps
                start = ts
                end = ts + DURATION

                requestAnimationFrame(time => tick(time))
            } else if (ts < end) {
                // Update height smoothly over duration
                const percent = (ts - start) / DURATION

                if (percent > 0) {
                    const height = (percent * diff) + initial.height
                    el.style.height = `${height}px`
                }

                requestAnimationFrame(time => tick(time))
            } else {
                // Reset styles on completion
                this.setState({ expanded: true })
            }
        }

        requestAnimationFrame(time => tick(time))

    }

    collapse = () => {
        const { data } = this.props
        const el = document.getElementById(data.link)
        const initial = el.getBoundingClientRect()
        const finalHeight = window.innerHeight * 0.25

        const diff = initial.height - finalHeight
        const DURATION = 400
        let start = ''
        let end = ''

        const tick = ts => {
            if (!start) {
                // Set start and end timestamps
                start = ts
                end = ts + DURATION

                requestAnimationFrame(time => tick(time))
            } else if (ts < end) {
                // Update height smoothly over duration
                const percent = (ts - start) / DURATION

                if (percent > 0) {
                    const height = initial.height - (percent * diff)
                    el.style.height = `${height}px`
                }

                requestAnimationFrame(time => tick(time))
            } else {
                // Reset styles on completion
                this.setState({ expanded: false })
            }
        }

        requestAnimationFrame(time => tick(time))
    }

    render () {
        const { data } = this.props
        const { expanded } = this.state
        
        return (
            <ArticleContainer
                id={data.link}
                expanded={expanded}
                onClick={expanded ? this.collapse : this.expand}
            >
                <Frost expanded={expanded} />
                <ReadMore>{expanded ? 'Read Less' : 'Read More'}</ReadMore>
                <ArticleTitle>{data.title.trim()}</ArticleTitle>
                <ArticleAuthor>{`by ${data.author.trim()}`}</ArticleAuthor>
                <ArticleContent>{data.content.trim()}</ArticleContent>
            </ArticleContainer>
        )
    }
}

export default Article