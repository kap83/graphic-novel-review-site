class UsersController < ApplicationController

    # skip_before_action :authorized, only: :create

    def index 
        user = User.all 
        render json: user
    end

    
    def show 
        user = User.find_by(id: session[:user_id])
        if user.valid? 
            render json: user
        else
            render json: {error: "Please Sign In"}, status: :unauthorized
        end
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
