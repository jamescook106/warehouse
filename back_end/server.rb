##############################################
#### Server.rb
#### James Cook
#### This is the server code for the project. To run the project, run ruby main.rb
##############################################

#Sets the port to 4568
set :port, 4568

#This is the GET request from the shipping page
get '/packer/:SID' do |n|
    
    #Allows same origin policy
    response.headers['Access-Control-Allow-Origin'] = '*'
    
    #Print to terminal for test purposes
    puts '/packer get'
    
    #Print the submitted code to terminal
    puts n
    
    "Success"
end


#Packer subroutine which Assigns a packer ID, Date and Time to a box ID when packed
post '/packer' do
    
    #Allows same origin policy
    response.headers['Access-Control-Allow-Origin'] = '*'
    
    #Read in the trasmitted JSON
    params = JSON.parse(request.env["rack.input"].read)
    
    #Print the json to terminal for test purposes
    puts params
    "Success"

end

#This is the GET request from the shipping page
get '/shipping/:SID' do |n|
    
    #Print to terminal for test purposes
    puts '/shipping get'
    
    #Print the submitted code to terminal
    puts n
    
    "Customisations will go here"

end

#This is the POST request from the shipping page
post '/shipping' do
    
    #Allows same origin policy
    response.headers['Access-Control-Allow-Origin'] = '*'
    
    #Print to terminal for test purposes
    puts '/shipping post'
    
    #Parse Json Input
    params2 = JSON.parse(request.env["rack.input"].read)
    
    #Print Json input to terminal
    puts params2
    
    "Succes"

end