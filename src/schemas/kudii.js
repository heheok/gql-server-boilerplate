import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        kudiies: [Kudii!]
        kudii(id:ID!):Kudii
    }

    type Kudii {
        id: ID!
        message: String!
        fromUser:User!
        toUser:User!
    }
`;
