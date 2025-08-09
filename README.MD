# ASVABDRILL

### Official
- **staging**: https://staging.hoseaindustries.com/
- **production**: https://hoseaindustries.com/

### AWS
- **staging:** https://9xnlpdf095.execute-api.us-west-2.amazonaws.com/
- **production:** https://2x11semrig.execute-api.us-west-2.amazonaws.com/

### Deploy
git commit -a -m "wip" --no-verify && git push origin HEAD

- arc deploy --staging
- arc deploy --production

### Logs
- arc logs staging app/get-index
- arc logs production src/http/get-index
