Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  post '/users/:id/:product_id', to: 'users#add_product'
  delete '/users/:id/:product_id', to: 'users#delete_product'
  get '/users/:id/products', to: 'users#get_all_products'
  delete '/users/:id/products', to: 'users#remove_all'

  resources :users 
  resources :products
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
