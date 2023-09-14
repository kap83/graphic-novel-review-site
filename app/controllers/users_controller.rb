class UsersController < ApplicationController

    before_action :authorized
    skip_before_action :authorized, only: [:create, :show]

    def index 
        user = User.all 
        render json: user
    end

    
    def show 
        user = User.find(session[:user_id])
        render json: user
    end

    def create 
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created 
        else
            render json: {errors: user.errors.full_message}, status: unprocessable_entity
        end
        
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name)
    end

end
