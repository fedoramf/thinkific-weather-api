# thinkific-weather-api

## Notes

### Date
11/24/2020
### Location of deployed application
N/A
### Time spent
5-6 hrs
### Assumptions made
Use this section to tell us about any assumptions that you made when creating your solution.
#
- assumed there's only three weather states: sun/cloud/rain - but there are more/could be a combination of states
- modeling weather data was split into city/country/geo coordinates/temperature (in celcius - whereas somewhere like the US would use fahrenheit?) and precipitation (in percentage, could be another metric?), maybe more detail required from a weather api
- assumed that each city had a unique cityid irrelevant of their country in case of similarly named cities
- assumed abbreviations were ok for countries with long names (what constitues as a 'long name'? I put 'United Kingdom' but 'United States of America' seemed too long) - may be better to have abbreviated versions for all countries instead of long names (CA/US etc.).
- that support for this would be in English (maybe supporting different languages to consider?)
- assumed we're only taking in one city at a time, and only by name, country is not associated (issues here where there are multiple cities with the same name but different country, ex.Vancouver BC vs Vancouver WA)
- assumed there wasn't going to be too many calls/requests at a time
- assumed the data set wasn't going to be modified/grow/shrink - there's no support to update/modify the data
- assumed there may be times when users may forget the query param/proper city name - some error handling to support this

I chose Node/Express as the API tech stack as I knew it would be quick to set up for a small api like this instead of using a framework like .NET where there's a lot more set-up involved even for simple things. Tried to incorporate React for the FE but that was taking longer than expected so I ended up using plain HTML and vanilla JS for the FE. Ideally React could have been handy for making the weather components on the UI - the type of weather component, a temperature conversion component, precipitation graph, location component etc.
<br>
### Shortcuts/Compromises made
If applicable. Did you do something that you feel could have been done better in a real-world application? Please let us know.
#
FE: 
- Should have sanitized the data from the text field in the UI prior to passing into fetch
- Was initially looking into hooking up a react FE but it was taking longer than expected to set up, hence the simple HTML/vanilla JS
- Ideally the supported cities should have come from getting all the cities from the server instead of being hardcoded
- There's a bug with the UI - entering a valid city name will make the request to the local endpoint (if the server is running) but there's an issue
with CORS that is returning a 0 status as the response, tried to fix but ran out of time
- doesn't actually destructure the weather data, would have liked to have displayed cities with their data on the UI

<br>

BE:
- Could have adding versioning for the weather api file
- Support for the CORS issue server side
- Server side support for getting all the cities
- Could've refactored more into separate functions ie. better way to 'validate weather data'
- geolocation support doesn't have the heading (N/E/S/W) which makes that piece of data not as useful - wanted to include the heading
- api is to return 'current' weather but theres no date/time values in the data
- no support to distinguish similarly named cities

<br>
Deployment:
- Was hoping to use Netlify to deploy, but i think the setup was taking longer than expected as well.

<br>

### Stretch goals attempted
If applicable, use this area to tell us what stretch goals you attempted. What went well? What do you wish you
could have done better? If you didn't attempt any of the stretch goals, feel free to let us know why.
- Tried to do deployment and a UI:
- the deployment with Netlify looked like it went well up until the actual deploy. It would build the branch from git and deploy the solution but I think I needed to read up more on hooking up the resulting build to Netlify, definitely missing config there. I was trying to mimick a sample express project they had (https://github.com/neverendingqs/netlify-express), but maybe a better approach here would have been to read the docs more prior to experimenting.
- the UI issues were with CORS (I think) - wish I had more time to investigate the issue more or re-write the solution to send the request from the same origin. Also wish I hadn't started off trying to integrate React, that took a fair bit of time and I didn't end up using that route because ultimately I just needed to make a GET request
<br>

### Instructions to run assignment locally
1. Using a terminal, clone repo in desired folder
2. cd into thinkific-weather-api
3. Run the following: npm install && npm start
(At this point it should be running on port 3000.)
4. Try the following for JSON weather data in Vancouver: curl http://localhost:3000/v1/weather?city=Vancouver 
<p>OR open index.html - there's an issue with CORS since the request isn't coming from the same origin, so if you enter a valid city name,
the data renders as '0' however, if you go into the network tab in the dev tools, you can see the request has been fulfilled.
</p>
<br>
Supported cities: San Francisco, New York City, London, Kyoto, Vancouver

### What did you not include in your solution that you want us to know about?
Were you short on time and not able to include something that you want us to know
about? Please list it here so that we know that you considered it.
- (might have gone over a bunch of this in previous points)
- Further support for deployment, I left out the generated build from the Netlify function
- Some styling would have been nice too

### Other information about your submission that you feel it's important that we know if applicable.
### Your feedback on this technical challenge
- Felt like a fair assignment, just took longer than I thought to write this up!
