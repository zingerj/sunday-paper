import React, { Component } from 'react'
import { Content, Online } from '.'

class Paper extends Component {
    state = {
        offline: true
    }

    render () {
        return (
            this.state.offline ? <Content /> : <Online />
        )
    }
}

// {
//     "match": {
//         "path": "/:userId/paper/:paperId",
//             "url": "/123/paper/456",
//                 "isExact": true,
//                     "params": {
//             "userId": "123",
//                 "paperId": "456"
//         }
//     },
//     "location": {
//         "pathname": "/123/paper/456",
//             "search": "",
//                 "hash": ""
//     },
//     "history": {
//         "length": 2,
//             "action": "POP",
//                 "location": {
//             "pathname": "/123/paper/456",
//                 "search": "",
//                     "hash": ""
//         }
//     }
// }

export default Paper