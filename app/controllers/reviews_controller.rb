class ReviewsController < ApplicationController

wrap_parameters format: []

    def index
        review = Review.all
        render json: review

    end 

    def update
        book = Book.find(params[:book_id])
        review = book.reviews.find(params[:id])
        review.update(params.permit([:comment]))
        render json: review
    end



end
