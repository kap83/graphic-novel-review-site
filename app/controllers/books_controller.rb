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
      end
    end

    def update 
      book = Book.find_by(id: params[:id])
      if book
         book.update(book_params)
         render json: book
      else
         render json: {errors: book.errors}, status: :not_modified
      end
    end


private 

   def book_params
      params.permit(:id, :title, :author, :artist, :genre, :publisher, :volume, :cover_url)
   end 

end
