require_dependency "pigrider_layout/application_controller"

module PigriderLayout
  class MainController < ApplicationController
    def globalLayout
    end
  
    def aboutUs
    end
  
    def contactUs
    end
    
    def socialNetworkSharing
      respond_to do |format|
        format.html {render :layout=>false}
      end
    end
  end
end
