class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]

    def index 
        user = User.all
        render json: user
    end

    def show 
        user = User.find_by(session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Please Sign In"}, status: :unauthorized
        end
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created 
      
        
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name)
    end

    # def current_user
    #     User.find_by(session[:user_id])
    # end

end
