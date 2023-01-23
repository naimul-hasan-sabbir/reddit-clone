import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/post';

const main = async () => {
	const orm = await MikroORM.init({
		entities: [Post],
		dbName: 'sabreddit',
		user: '',
		password: '',
		type: 'postgresql',
		debug: !__prod__,
	});
	const post = orm.em.create(Post, {
		title: 'my first post',
		createdAt: '',
		updatedAt: '',
	});
	await orm.em.persistAndFlush(post);
};

main();
