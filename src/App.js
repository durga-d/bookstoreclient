import axios from 'axios';
import './App.css';

const App = () => {
    axios(`http://localhost:8080/api/v1/books`).then(books => {
        console.log(books);
    });
    return <div>My First Component</div>
};

export default App;
