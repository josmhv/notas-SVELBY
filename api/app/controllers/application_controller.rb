class ApplicationController < ActionController::API
  def index
    posts = Post.all
    usrs = Usr.all
    data = {
      usrs: usrs,
      posts: posts
    }
    render json: data
  end
end
