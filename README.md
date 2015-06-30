# Warehouse
This is a test app that will receive information from a handheld barcode scanner, via bluetooth, and then communicate this result with a database. The front end is written in HTML, JS and JQuery and utilises the foundation framework. The back end is written in ruby and uses the sinatra gem.
#Install
After forking and cloning this repository <kbd>bundle install</kbd> to install all of the required gems.
#Usage
To run the app, <kbd> cd back_end </kbd> and then <kbd> ruby main.rb </kbd>. Next navigate to the front end and open <kbd> home.html </kbd>. Using the appropiate page (shipping or packing) will submit the barcodes from the scanner to the appropiate point in the database.