Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  post '/users/:id/:product_id', to: 'users#add_product'
  delete '/users/:id/:product_id', to: 'users#delete_product'
  get '/users/:id/products', to: 'users#get_all_products'
  put '/users/:id/products', to: 'users#remove_all'
  put '/users/:id/products/:product_id', to: 'users#update_count'
  delete '/users/:id/:product_id/1', to: 'users#decrement_product'
  get '/products/:product_id/reviews', to: 'reviews#get_product_reviews'
  post '/reviews/:id/:product_id', to: 'reviews#create_review'

  resources :users 
  resources :products
  resources :reviews
end
