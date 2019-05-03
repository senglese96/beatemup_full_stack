Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :show, :index, :update] do
      resources :attendances, only: [:create]
    end
    resources :groups, only: [:create, :destroy, :show, :index, :update] do
      resources :memberships, only: [:create]
    end
    resources :attendances, only: [:destroy]
    resources :memberships, only: [:destroy]
  end
end
