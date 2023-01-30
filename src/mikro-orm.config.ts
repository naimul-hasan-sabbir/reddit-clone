import { __prod__ } from './constants';
import { Post } from './entities/post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
	migrations: {
		path: path.join(__dirname, './migrations'),
		// pattern: /^[\w-]+\d+\.[tj]s$/,
		// path: 'dist/migrations',
		// pathTs: 'src/migrations',
		glob: '!(*.d).{js,ts}',
	},
	entities: [Post],
	dbName: 'sabreddit',
	user: 'postgres',
	password: 'csigesnpb',
	type: 'postgresql',

	debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
// import { __prod__ } from './constants';
// import { Post } from './entities/post';
// import { MikroORM } from '@mikro-orm/core';
// import path from 'path';

// const config = {
// 	migrations: {
// 		path: path.join(__dirname, './migrations'),
// 		glob: '!(*.d).{js,ts}',
// 	},
// 	entities: [Post],
// 	dbName: 'sabreddit',
// 	user: 'postgres',
// 	password: 'csigesnpb',
// 	type: 'postgresql',
// 	debug: !__prod__,
// };

// export default MikroORM.init(config);
