class BooksController < ApplicationController


    def index
       book = Book.all.order(title: 'asc')
       render json: book.includes(:reviews)
    end


    def create
      book = Book.create!(book_params)
      render json: book
    end

    def update 
         book = find_book
         book.update!(book_params)
         render json: book
    end

    def destroy
      book = find_book
      book.destroy
      head :no_content
     
    end

private 

   def book_params
      params.permit(:id, :title, :author, :artist, :volume, :cover_url, :user_review_details)
   end 

   def find_book
      Book.find(params[:id])
   end

end