Rails.application.routes.draw do
  resources :carts, only: [:index, :create, :destroy]
  resources :reviews
  resources :items, only: [:index, :show]
  resources :categories, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]
  
  resources :sessions, only: [:create, :destroy]

  get "/me", to: "users#show"
  get "/signup", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
 
end
