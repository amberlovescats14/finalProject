
export const increaseCount = () => ({
  type: "INCREASE_COUNT",
  
})

export const getRuns = (users) => {
  return (dispatch) => {
    fetch('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=20mi&categories=108&subcategories=8001&start_date.range_start=2019-08-01T01%3A01%3A00Z&start_date.range_end=2019-08-31T01%3A01%3A00Z&token=KXBIEIL3SS3GWKDXSU7F')
    .then(response => response.json())
     .then(runs => {
       dispatch({
         type: "SET_RUNS",
         value: runs.events
       })
         
         })
  }
}

//https://www.eventbriteapi.com/v3/venues/VENUE_ID/events/search/?sort_by=date&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=30mi&categories=108&subcategories=8001&start_date.range_start=2019-06-01T01%3A01%3A00Z&token=KXBIEIL3SS3GWKDXSU7F

// good one!
//https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=20mi&categories=108&subcategories=8001&start_date.range_start=2019-06-01T01%3A01%3A00Z&token=KXBIEIL3SS3GWKDXSU7F