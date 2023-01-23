import { __prod__ } from './constants';
import { Post } from './entities/post';

export default {
	entities: [Post],
	dbName: 'sabreddit',
	user: '',
	password: '',
	type: 'postgresql',
	debug: !__prod__,
};
