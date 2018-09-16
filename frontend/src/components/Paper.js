import React, { Component } from 'react'
import { Content, Online } from '.'
import { firestore as db } from '../lib/firebase'
import loSto from 'store'
import { LO_STO } from '../lib/constants'

class Paper extends Component {
    state = {
        loading: !loSto.get(LO_STO.ARTICLES),
        offline: !window.navigator.onLine,
        articles: loSto.get(LO_STO.ARTICLES)
    }

    componentDidMount() {
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

            loSto.set(LO_STO.ARTICLES, articles)

            setTimeout(() => {
                this.setState({ loading: false, articles })
            }, 1000)
        }).catch(err => {
            this.setState({ loading: false })
            console.error(err)
        })
    }

    updateConnectionStatus = e => {
        this.setState({ offline: e.type === 'offline' })

        if (e.type === 'online' && !this.state.articles) {
            this.fetchArticles()
        }
    }

    render () {
        const { offline, loading, articles } = this.state

        if (offline && articles) {
            return <Content articles={articles} />
        } else if (offline && !articles) {
            return 'Please allow your paper to finish printing! (Turn your internet back on)'
        }
        
        return <Online loading={loading} />
    }
}

export default Paper