require 'sinatra'
require 'json'

post '/' do
    params = JSON.parse(request.env["rack.input"].read)
    puts params
end