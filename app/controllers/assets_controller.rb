class AssetsController < ApplicationController
  def index
    if params[:file] == 'resume'
      send_file('app/assets/public/pdf/Lucian Hymer Resume.pdf', type: 'application/pdf')
    end
  end
end
