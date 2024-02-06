class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 
    end

    # def index 
    #     user = User.all
    #     render json: user
    # end

    def show 
        user = @current_user
        if user
            render json: user
        else
            render json: {error: "Please Sign In"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name)
    end


end
