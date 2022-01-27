Rails.application.routes.draw do
  resources :carts, only: [:index, :create, :destroy]
  resources :reviews
  resources :items, only: [:index, :show]
  resources :categories, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]
  
  resources :sessions, only: [:create, :destroy]

  get "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/signup", to:  "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
  
 
end
