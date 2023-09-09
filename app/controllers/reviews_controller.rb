class ReviewsController < ApplicationController

wrap_parameters format: []

    def index
        review = Review.all
        render json: review

    end 

    def show
        #looks like the review ids are all i need? really?????? 
        byebug
    end


end
