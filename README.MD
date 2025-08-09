# ASVABDRILL

### Official
- **staging**: https://staging.hoseaindustries.com/
- **production**: https://hoseaindustries.com/

### AWS
- **staging:** 	
- **production:** 

### Deploy
git commit -a -m "wip" --no-verify && git push origin HEAD

- arc deploy --staging
- arc deploy --production

### Logs
- arc logs staging app/get-index
- arc logs production src/http/get-index
