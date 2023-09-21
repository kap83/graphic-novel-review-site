class BooksController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :render_missing_attribute_response

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

   def render_missing_attribute_response(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
   end

end