const { request } = require('https');

const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MWViY2YzMS01ODM5LTQxMmUtODNiYi04MDFhMmJhNzg2MjcvIiwiaWF0IjoxNjgzODMyNzUzLCJuYmYiOjE2ODM4MzI3NTMsImV4cCI6MTY4MzgzNzA4NywiYWNyIjoiMSIsImFjcnMiOlsidXJuOnVzZXI6cmVnaXN0ZXJzZWN1cml0eWluZm8iXSwiYWlvIjoiQVRRQXkvOFRBQUFBb1hZS0JlMjNJMWs5cmtUNlNzLzFuOEgyd1ZBM1NpcnA5L0NnMDlIZFd3OGFjS1FxSHpVcDJ5dFVjc1BDbkVYWiIsImFtciI6WyJwd2QiLCJ3aWEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiU2hhcmVQb2ludCBPbmxpbmUgV2ViIENsaWVudCBFeHRlbnNpYmlsaXR5IiwiYXBwaWQiOiIwOGUxODg3Ni02MTc3LTQ4N2UtYjhiNS1jZjk1MGMxZTU5OGMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkN1bGF1IiwiZ2l2ZW5fbmFtZSI6IkpvbmF0aGFuIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjAxLjU0LjE0My43MiIsIm5hbWUiOiJKb25hdGhhbiBDdWxhdSIsIm9pZCI6IjNhZWZmMDAxLWRiOTgtNDM0NC1hMWQyLTAyZDE4ZGY1NGYzNyIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS02MDIxNjIzNTgtMTU4MDgxODg5MS04Mzk1MjIxMTUtMTAxMjE4OCIsInB1aWQiOiIxMDAzQkZGRDk1OUNENDQzIiwicmgiOiIwLkFROEFNY19yVVRsWUxrR0R1NEFhSzZlR0p3TUFBQUFBQVBFUHpnQUFBQUFBQUFBUEFEcy4iLCJzY3AiOiJGaWxlcy5SZWFkV3JpdGUuQWxsIFNpdGVzLkZ1bGxDb250cm9sLkFsbCBTaXRlcy5SZWFkV3JpdGUuQWxsIFRlcm1TdG9yZS5SZWFkV3JpdGUuQWxsIiwic2lkIjoiMzcxMGYxM2YtZjAwNi00OTljLWEyOWQtZGJhZjIxYmNmZDYyIiwic2lnbmluX3N0YXRlIjpbImlua25vd25udHdrIl0sInN1YiI6IlZmT1dabkwybGFBVkFFSGxEUVFTR1ZJNDdUSFFUZmNPSG5yeXBjYWJNN0EiLCJ0aWQiOiI1MWViY2YzMS01ODM5LTQxMmUtODNiYi04MDFhMmJhNzg2MjciLCJ1bmlxdWVfbmFtZSI6IjEwMDg2NTE5QHB1Y3JzLmJyIiwidXBuIjoiMTAwODY1MTlAcHVjcnMuYnIiLCJ1dGkiOiJkRHloREJ2VFMwdTdPTV9HQjNZekFBIiwidmVyIjoiMS4wIn0.nzD5UuljA5-dCtde1-qTsEzK9x2BZnnb4v5aTAP3DUamCnUSVLwo40F6unRCGhaKAVdrH5fXvQk80i-eaDj5dafvEm0tmGvuKSKaMgRD9nk17oC_Kw-PuTjURgzrhyorsPRU5AqdPDJdqQGbObNNiPCkQIy-9UkhoHft6kSUX3BCTKsNCVYwfYX0vpZl54jTvQrBJEBlk9AwJqJPFJYYSsDLTyqz0GEBMIgpyDr7dRAZMqv3Yx_fFHaTMPXwcArgAi3CUQ8i9B6K2KrJB3mzZEYjm1ZLuIx8T4VGThnj5KGiW2iAW5RNELtr9ProlH9UqYMYgKYkakIKAn7qohCeag`
const req = request(`https://brpucrs.sharepoint.com/sites/Labelo_Processos/_api/web/lists/GetByTitle('user')/items`,
{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json;odata=verbose',
    'Accept': 'application/json;odata=verbose',
    'Authorization': 'Bearer ' + token
  }
}, (res)=> {
  res.on('data', (d)=> {
    console.log(d.toString())
  })
})

req.end()
