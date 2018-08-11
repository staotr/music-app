Rails.application.routes.draw do
  root 'tracks#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match '/:path', to: 'tracks#index', via: :all

  namespace :api do
    namespace :v1 do
        resources :tracks, only: [:index, :create]
    end
  end

end
