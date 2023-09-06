class BooksController < ApplicationController

   wrap_parameters format: []


    def index
       book = Book.all.order(title: 'asc')
       render json: book.includes(:reviews)
    end

    def show 
      book = find_book
      render json: book
    end

    def create
      book = Book.create(book_params)
      if book.valid?
         render json: book, status: :created
      else
         render json: {errors: [books.errors]}, status: :unprocessable_entity
      end
    end

    def update 
      book = find_book
      if book.valid?
         book.update(book_params)
         render json: book
      else
         render json: {error: [books.errors]}, status: :not_modified
      end
    end

    def destroy
      book = find_book

      if book
         book.destroy
         head :no_content
      else
         render json: { error: ["Book not Found"] }, status: not_found
      end
    end

private 

   def book_params
      params.permit(:id, :title, :author, :artist, :genre, :publisher, :volume, :cover_url)
   end 

   def find_book
      Book.find_by(id: params[:id])
   end

end
