import  Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggeIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggeIn, postsCtrl.write);

const post = new Router();
post.get('/', postsCtrl.read);
post.delete('/', checkLoggeIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggeIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;