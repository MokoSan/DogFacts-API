# Dog Facts API
A very simple API that returns random dog facts.

## Inspiration
This API was inspired by [DukeNgn's Dog Facts API](https://github.com/DukeNgn/Dog-facts-API) that accomplished the same goal except it was written in Python using Flask. The impetus behind this port was to include CORs support as the API deployed by DukeNgn on Heroku couldn't be accessed by my React application.

DukeNgn's port is also a port of [kinduff/dog-api](https://github.com/kinduff/dog-api).

> Note: The project is being hosted by Heroku with free dyno; thus, there will be potential delay the first time you make a request (app went to sleep after dyno does not receive traffic in 1 hour). Please be patient, and the call will be faster next time.

## Running the Project Locally
- Clone the Repo
- ``npm start`` or ``nodemon`` can be used to start the server. 
- ``process.env.PORT || 5000`` is logic to discern the port. 

## Usage
- https://dogfacts-api.herokuapp.com/api/v1/resources/dogs for all the dog facts.
- https://dogfacts-api.herokuapp.com/api/v1/resources/dogs?number={number} for a particular number of random dog facts.
- https://dogfacts-api.herokuapp.com/api/v1/resources/dogs?index={index} for a dog fact associated with the index - there are 435 total facts.

## Example:
http://localhost:5000/api/v1/resources/dogs?number=2 for 2 random dog facts. 

### Output:
```
[
    {"fact":"Dogs are direct descendants of wolves."},
    {"fact":"Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful."}
]
```