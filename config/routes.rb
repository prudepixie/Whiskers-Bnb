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
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
