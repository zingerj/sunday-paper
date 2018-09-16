import React, { Component } from 'react'
import { Content, Online } from '.'
import { firestore as db } from '../lib/firebase'
import loSto from 'store'
import { LO_STO } from '../lib/constants'

class Paper extends Component {
    constructor (props) {
        super(props)

        this.state = {
            offline: !window.navigator.onLine,
            error: false,
            loading: !loSto.get(`${LO_STO.ARTICLES}/${props.userId}/${props.paperId}`),
            articles: loSto.get(`${LO_STO.ARTICLES}/${props.userId}/${props.paperId}`)
        }
    }

    componentDidMount () {
        window.addEventListener('online', this.updateConnectionStatus)
        window.addEventListener('offline', this.updateConnectionStatus)

        if (!this.state.articles) this.fetchArticles()
    }

    fetchArticles = () => {
        const {
            match: {
                params: {
                    userId,
                    paperId
                }
            }
        } = this.props

        const paperRef = db.collection('users').doc(userId).collection('papers').doc(paperId).collection('articles')

        paperRef.get().then(collection => {
            const articles = collection && collection.docs && collection.docs.map(d => d.data())

            if (articles.length) {
                loSto.set(`${LO_STO.ARTICLES}/${userId}/${paperId}`, articles)

                setTimeout(() => {
                    this.setState({ loading: false, articles })
                }, 1000)
            } else {
                setTimeout(() => {
                    this.setState({ loading: false, error: true })
                }, 1000)
            }

        }).catch(err => {
            console.error(err)
            
            setTimeout(() => {
                this.setState({ loading: false, error: true })
            }, 1000)
        })
    }

    updateConnectionStatus = e => {
        this.setState({ offline: e.type === 'offline' })

        if (e.type === 'online' && !this.state.articles) {
            this.fetchArticles()
        }
    }

    render () {
        const { offline, loading, error, articles } = this.state

        if (offline && articles) {
            return <Content articles={articles} />
        } else if (offline && !articles) {
            return 'Please allow your paper to finish printing! (Turn your internet back on)'
        }
        
        return <Online loading={loading} error={error} />
    }
}

export default Paper