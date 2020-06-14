import path from 'path';
import connection from './src/db/conn';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'db', 'database.sqlite')
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'db','migrations')
    },
    seeds:{
        directory: path.resolve(__dirname, 'src', 'db','seeds')
    },
    useNullAsDefault: true
};
