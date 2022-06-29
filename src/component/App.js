import axios from 'axios';
import './App.css';
import Layout from './layout/Layout';

const App = () => {
    axios(`http://localhost:8080/api/v1/books`).then(books => {
        console.log(books);
    });
    return (
        <Layout>
            <div>My First Component</div>
        </Layout>
    )
};

export default App;
