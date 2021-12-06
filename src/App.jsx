import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <Link to="/books">
          {' '}
          <h1>Library Catalog!</h1>{' '}
        </Link>
        <Switch>
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/books" component={BookList} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
