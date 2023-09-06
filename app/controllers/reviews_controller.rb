class ReviewsController < ApplicationController

wrap_parameters format: []

    def index
        review = Review.all
        render json: review

    end 

end
