class BooksController < ApplicationController

   wrap_parameters format: []
   

    def index
       book = Book.all.order(title: 'asc')
       render json: book
    end

    def show 
      book = find_book
      if book
         render json: book
      else
         render json: {errors: "Book not Found"}, status: :not_found
      end
    end

    def create
      book = Book.create(book_params)
      if book.valid?
         render json: book, status: :created
      else
         #book.errors.full_messages - so you dont have to the concat in the front end
         render json: {errors: book.errors}, status: :unprocessable_entity
      end
    end

    def update 
         book = find_book
         book.update(book_params)
         render json: book
    end

    def destroy
      book = find_book
      book.destroy
      head :no_content
     
    end

private 

   def book_params
      params.permit(:id, :title, :author, :artist, :volume, :cover_url)
   end 

   def find_book
      Book.find_by(id: params[:id])
   end

end