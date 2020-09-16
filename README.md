# resty
# day 1
## user stories
As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
As a user, I want to enter the URL to a REST API and select the REST method to use to access it
As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested
# development objectives
Create a visually appealing site with a Header, Footer, and a large content area
Create a form that asks for a URL
Create buttons that let the user choose from the REST methods (get, post, put, delete)
When the form is filled out, and the button is clicked, display the URL and the method chosen

# day 2
## user stories:
As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
As a user, I want to see the results returned from an API request in my browser in a readable format

## progress:
Today I was able to pass get all the desired functionality. Really struggled to get a good test going--decided to start on the code challenge before it got too late. 
# One take away 
One take away I don't want to forget is the relationship between app.js, the components, and their classes. 
for example:
"render( <Results count{this.state.count}/>)" everything I need to use in the Results component needs to come from it's parent (App class in app.js in this case) to be retrieved in the Result component as "props.count"