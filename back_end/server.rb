#Sets the port to 4568
set :port, 4568

post '/packer' do
    
    #Allows same origin policy
    response.headers['Access-Control-Allow-Origin'] = '*'
    
    params = JSON.parse(request.env["rack.input"].read)
    puts params['Packer_ID']
    puts params['Packing_Code']
end