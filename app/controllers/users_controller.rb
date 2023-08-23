class UsersController < ApplicationController


    #TO DO
        #WHEN THE USER DATA IS SENT BACK, DON'T SEND BACK PASSWORD DIGEST, UPDATED/CREATED AT

    def show 
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user
        else
            render json: {error: "Please sign in"}, status: :unauthorized
        end
    end
    

end
