class ReviewsController < ApplicationController

wrap_parameters format: []

    def index
        review = Review.all
        render json: review

    end 

    def create
        book = find_book
        review = book.reviews.create(review_params)
        render json: review

    end

    def update
        review = find_review
        review.update(review_params)
        render json: review
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private 

    def review_params
        params.permit(:user_id, :id, :book_id, :created_at, :comment)
    end

    def find_book
        Book.find(params[:book_id])
    end

    def find_review
        Book.find(params[:book_id]).reviews.find(params[:id])
    end


end
