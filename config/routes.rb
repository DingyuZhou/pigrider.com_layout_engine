PigriderLayout::Engine.routes.draw do
  match "AboutUs"=>"main#aboutUs", :as=>:aboutUs
  match "ContactUs"=>"main#contactUs", :as=>:contactUs
  post "socialNetworkSharing"=>"main#socialNetworkSharing", :as=>:socialNetworkSharing
end
