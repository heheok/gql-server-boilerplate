import { gql } from 'apollo-server-express';

import userSchema from './user';
import kudiiSchema from './kudii';

const linkSchema = gql`
    type Query {
        _:Boolean
    }
    type Mutation {
        _:Boolean
    }
    type Subscription {
        _:Boolean
    }
`;

export default [linkSchema, userSchema, kudiiSchema];
