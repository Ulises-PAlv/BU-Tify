export class API_Values {
    constructor () { }

    url: string = 'http://25.2.164.7:9000/'; // url Chavita

    q_GET: any = {
        usrs: 'users',
        posts: 'posts',
        commentPost: 'comments/',
        postsUsr: 'posts/',
        usr: 'usr/',
        playlist: 'playlist/'
    }

    q_POST: any = {
        addUsr: 'addUser',
        addCommt: 'addComment',
        addPost: 'addPost',
        createPL: 'createPL',
        addRolita: 'addRolita'
    }

    q_PUT: string = 'chgPasswd/';
}