require 'sinatra'
require 'json'

post '/' do
    params = JSON.parse(request.env["rack.input"].read)
    puts params['Packer_ID']
    puts params['Packing_Code']
end