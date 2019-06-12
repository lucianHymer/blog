class AssetsController < ApplicationController
  def index
    if params[:file] == 'resume'
      send_file('../javascript/blogPosts/resume.pdf')
    end
  end
end
