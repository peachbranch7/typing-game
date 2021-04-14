Rails.application.routes.draw do
  devise_for :users
  root to: 'scores#index'
  resources :scores, only: [:index, :new, :create]
  resources :words, only: [:new, :create]
end
