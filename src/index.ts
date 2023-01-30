// import { MikroORM } from '@mikro-orm/core';
// import { __prod__ } from './constants';
// import { Post } from './entities/post';
// import microConfig from './mikro-orm.config';
// import express from 'express';

// const main = async () => {
// 	const orm = await MikroORM.init(microConfig);
// 	await orm.getMigrator().up();
// 	// // const post = orm.em.create(Post, {
// 	// 	title: 'my first post',
// 	// 	createdAt: '',
// 	// 	updatedAt: '',
// 	// });
// 	// await orm.em.persistAndFlush(post);
// 	// const posts = await orm.em.find(Post, {});
// 	// console.log(posts);
// 	const app = express();

// 	app.get('/', (_, res) => {
// 		res.send('hello...');
// 	});

// 	app.listen(4000, () => {
// 		console.log('server started on localhost:4000');
// 	});
// };

// main().catch((err) => {
// 	console.log(err);
// });
import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/post';
import microConfig from './mikro-orm.config';
import express from 'express';

const main = async () => {
	const orm = await MikroORM.init(microConfig);
	await orm.getMigrator().up();
	const post = orm.em.create(Post, {
		title: 'my first post',
		createdAt: new Date(),
		updatedAt: new Date(),
	});
	await orm.em.persistAndFlush(post);
	const posts = await orm.em.find(Post, {});
	console.log(posts);
};

main().catch((err) => {
	console.log(err);
});
