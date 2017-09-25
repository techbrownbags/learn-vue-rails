Rails.application.routes.draw do
  resources :projects


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'data_binding#basic'
  match '/data_binding/basic', to: 'data_binding#basic', via: 'get'
  match '/data_binding/reactive', to: 'data_binding#reactive', via: 'get'

  match '/computed/basic', to: 'computed#basic', via: 'get'

  # COMPONENTS
  match '/components/basic', to: 'components#basic', via: 'get'
  match '/components/data', to: 'components#data', via: 'get'
  match '/components/props', to: 'components#props', via: 'get'
  match '/components/child', to: 'components#child', via: 'get'

  # COMPONENT COMMUNICATION
  match '/communication/basic', to: 'communication#basic', via: 'get'
  match '/communication/dispatcher', to: 'communication#dispatcher', via: 'get'


  match '/axios/basic', to: 'axios#basic', via: 'get'
  match '/axios/skills', to: 'axios#skills', via: 'get'

  # FORMS
  match '/projects/new', to: 'projects#create', via: 'post', as: 'new_project_post'

end
