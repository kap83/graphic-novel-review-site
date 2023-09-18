class ReviewsController < ApplicationController


    def index
        review = Review.all
        render json: review

    end 

    def create
        review = current_user.reviews.create(review_params)
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
        params.permit(:id, :book_id, :created_at, :comment)
    end

    def current_user
       User.find(session[:user_id])
    end

    def find_review
        current_user.reviews.find(params[:id])
    end


end
