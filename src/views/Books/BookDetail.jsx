import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBookById } from '../../services/books'
import Book from '../../components/book/Book'

function BookDetail() {
  const { id } = useParams() // TODO: Use id from route
  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>

  return (
    <section>
      <Book book={book} showDetail />
    </section>
  )
}

export default BookDetail
