import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@emailcom',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@emailcom',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'jane@emailcom',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;