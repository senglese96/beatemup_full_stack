Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :show, :index, :update]
    resources :groups, only: [:create, :destroy, :show, :index, :update]
  end
end
