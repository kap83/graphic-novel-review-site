class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]

    def index 
        user = User.all
        render json: user
    end

    
    def show 
        user = current_user
        render json: user
    end

    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created 
        else
            render json: {errors: user.errors.full_messages}, status: unprocessable_entity
        end
        
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name)
    end

    def current_user
        User.find(session[:user_id])
    end

end
