#Sets the port to 4568
set :port, 4568

post '/packer' do
    
    #Allows same origin policy
    response.headers['Access-Control-Allow-Origin'] = '*'
    
    params = JSON.parse(request.env["rack.input"].read)
    puts params['Packer_ID']
    puts params['Packing_Code']
    
end

get '/shipping/:SID' do |n|
    puts '/shipping get'
    puts n

end

post '/shipping' do
    #Allows same origin policy
    response.headers['Access-Control-Allow-Origin'] = '*'
    puts '/shipping post'
    params2 = JSON.parse(request.env["rack.input"].read)
    puts params2

end