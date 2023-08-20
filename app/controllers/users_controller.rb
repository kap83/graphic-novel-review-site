class UsersController < ApplicationController

    def show 
        user = User.find_by(id: sessions[:user_id])
        if user 
            render json: user
        else
            render json: {error: "Not authorized. Please sign in"}, status: :unauthorized
        end
    end
    

end
