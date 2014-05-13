require 'sinatra/base'

class PRS < Sinatra::Base
  get '/' do
    'Hello PRS!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
