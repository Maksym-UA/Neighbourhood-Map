import json, requests
url = 'https://api.foursquare.com/v2/venues/explore'

params = dict(
  client_id='PPCTPSMS0TH5GLA3QSAK0YYH4N0VDQKRDIT0VLKITFHRD2OC',
  client_secret='IUYZUMGIA0EJFDRYDGMYOGUYPRSFCDZFNZST5R0DE3RBFZYO',
  v='20170801',
  ll='40.7243,-74.0018',
  query='coffee',
  limit=1
)
resp = requests.get(url=url, params=params)
data = json.loads(resp.text)



'''Userless Auth
https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=PPCTPSMS0TH5GLA3QSAK0YYH4N0VDQKRDIT0VLKITFHRD2OC&client_secret=IUYZUMGIA0EJFDRYDGMYOGUYPRSFCDZFNZST5R0DE3RBFZYO&v=20170801


https://api.foursquare.com/v2/venues/search?ll=50.4462805,30.5106136&query=MAFIA&radius=250&client_id=PPCTPSMS0TH5GLA3QSAK0YYH4N0VDQKRDIT0VLKITFHRD2OC&client_secret=IUYZUMGIA0EJFDRYDGMYOGUYPRSFCDZFNZST5R0DE3RBFZYO&v=20170801'''