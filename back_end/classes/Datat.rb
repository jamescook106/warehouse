############################################################
############################################################
# Datat Class (CSV reader class)
############################################################
############################################################
# James Cook
############################################################
############################################################
# This is a class to load in the database as a csv file
# generated by Zoho reports. The csv file is stored in the
# datat_path, and will need to be changed to run on a different
# machine. For security purposes the data is not included with
# the git repo, so please download the csv file seperately.
############################################################
############################################################


# As the data is stored as a csv file we need to the csv gem
require 'csv'

# We begin the class. It is called Datat (Data Toucan)
class Datat
    
    def initialize(database)
        @database=database
    end
    
    # Class function to determine csv location
    def datat_location
        
        #Please change the datat_path as required
        datat_path = '/Users/James/Dropbox/ToucanBox/Data/'
        
        #@@datat_path_specific is accessible anywhere in the class
        @@datat_path_specific = datat_path + @database +'.csv'
        
    end
    
    # Class function to read in the csv file
    def datat_read
        
        #Read in the csv file
        @@datat_array = CSV.read(@@datat_path_specific)
        
        #Delete the row which contains the database title.
        @@datat_array.delete_at(0)
        
        ######################################
        #puts @@datat_array[2]
        #Verify the conversion has taken place
        #puts @database + " CSV file converted"
        ######################################
        
    end
    
    # A loop to select specific data from the database
    def datat_select
        
        #Global variable to contain selected data from the csv file
        $blueberry=[]
        
        #This loop selects specific information from the data
        #Specifically we select the Box Code, Box ID and product description
        @@datat_array.each do |fruit|
            rasberry =[]
            #Select Box ID
            strawberry = fruit[0]
            
            #Convert Box ID into a barcode by inserting zeros on the front
            until strawberry.length > 11 do
                strawberry.insert(0,'0')
            end
            #Add the barcode generated from the id to the database
            rasberry.push(strawberry)
            #Add the box code to the database
            rasberry.push(fruit[1])
            #Add the box description to the database
            rasberry.push(fruit[4])
            
            #Push to the global database
            $blueberry.push(rasberry)
        end
        
        ################
        #puts $blueberry
        ################
        
    end
    
    #Class function to do all actions
    def all
        self.datat_location
        self.datat_read
        self.datat_select
    end
end

##################################
#users = Datat.new("users")
#box_codes = Datat.new("box_codes")
#boxes = Datat.new("boxes")

#users.all
#box_codes.all
#boxes.all
##################################