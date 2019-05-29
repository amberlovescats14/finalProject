
export const increaseCount = () => ({
  type: "INCREASE_COUNT",
  
})

export const getRuns = (users) => {
  return (dispatch) => {
    fetch('https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=30mi&categories=108&subcategories=8001&token=KXBIEIL3SS3GWKDXSU7F')
    .then(response => response.json())
     .then(runs => {
       dispatch({
         type: "SET_RUNS",
         value: runs.events
       })
         
         })
  }
}