import React, {useState} from 'react'
import BookDetails from './BookDetails'
import Modal from './Modal'

export default function UsersBooks({book}) {

const [selectedBook, setSelectedBook] = useState(null)
const [isOpen, setIsOpen] = useState(false) 


function setTheStates(book) {
   if (selectedBook === null) {
    setSelectedBook(book)
    setIsOpen(true)
   } if (selectedBook === book) {
        setSelectedBook(prevBook => [...prevBook, book])
        setIsOpen(true)
   }
    
  }


  return (
    <>
    <button 
        type='button' 
        style={{background: "none", border: "none"}} 
        onClick={() => setTheStates(book)}
    >
        <img 
            src={book.cover_url}  
            alt={book.title} 
            width={307}
            height={500}
        />
    </button>
    <Modal open={isOpen} onClose={() =>setIsOpen(false)}>
        {selectedBook && <BookDetails selectedBook={selectedBook} />}
    </Modal>
    </>
  )
}
