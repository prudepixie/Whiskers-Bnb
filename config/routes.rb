Rails.application.routes.draw do
  root to: 'welcome#index'
  devise_for :users

  resources :reservations

  # namespace :api do
  #   namespace :v1 do
  #     resources :reservations, only: [:index]
  #   end
  # end
  resources :users
  get '/hosts', to: 'users#hosts'
  get '/reservations', to: 'reservations#index'
end
