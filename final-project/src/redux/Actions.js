
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

export const getTrails = (users) => {
  return (dispatch) => {
    fetch('https://services.arcgis.com/g1fRTDLeMgspWrYp/arcgis/rest/services/Park_Trails/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryPolyline&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=')
    .then(response => response.json())
    .then(data => data.features.filter((feat, idx) => idx < 10))
    .then(res => {
       dispatch({
         type: "SET_TRAILS",
         value: res
       })
         
         })
  }
}

//https://www.eventbriteapi.com/v3/venues/VENUE_ID/events/search/?sort_by=date&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=30mi&categories=108&subcategories=8001&start_date.range_start=2019-06-01T01%3A01%3A00Z&token=KXBIEIL3SS3GWKDXSU7F

// good one!
//https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=20mi&categories=108&subcategories=8001&start_date.range_start=2019-06-01T01%3A01%3A00Z&token=KXBIEIL3SS3GWKDXSU7F