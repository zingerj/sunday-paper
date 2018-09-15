import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
// import { typeDefs, resolvers } from './schema'

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world'
    }
}

const app = express()

const server = new ApolloServer({
    // These will be defined for both new or existing servers
    typeDefs,
    resolvers,
})

server.applyMiddleware({ app }) // app is from an existing express app

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)