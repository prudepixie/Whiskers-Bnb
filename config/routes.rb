Rails.application.routes.draw do
  root to: 'welcome#index'
  devise_for :users, :controllers => { :registrations => "users/registrations" }
  resources :reservations

  resources :users
  get '/hosts', to: 'users#hosts'
  get '/reservations', to: 'reservations#index'
end
