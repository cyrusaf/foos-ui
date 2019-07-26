import {createFoos} from './foos.twirp';

export const foosClient = createFoos('http://localhost:8080');
