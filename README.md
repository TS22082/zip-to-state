# State from zip

An api to get the 2 char state code from a zip code

Example:
`https://zip-to-state.herokuapp.com/check/32004`
Returns "FL"

`https://zip-to-state.herokuapp.com/check/94610`
Returns "CA"

const zip = 94610

`GET https://zip-to-state.herokuapp.com/check/ + zip`
