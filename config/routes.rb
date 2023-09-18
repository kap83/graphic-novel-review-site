Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    resources :books 
    #do
      #resources :reviews, only: [:create, :update]
    #end
    resources :reviews
    resources :users, only: [:index]
  

  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"


  # route to test your configuration
 
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
