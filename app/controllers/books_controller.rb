class BooksController < ApplicationController

   wrap_parameters format: []


    def index
       book = Book.all.order(title: 'asc')
       render json: book
    end

    def create
      book = Book.create(book_params)
      if book.valid?
         render json: book, status: :created
      else
         render json: {errors: book.errors}, status: :unprocessable_entity
         byebug
      end
    end


private 

   def book_params
      params.permit(:title, :author, :artist, :genre, :publisher, :volume, :cover_url)
   end 

end
