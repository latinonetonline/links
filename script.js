var hash = location.hash.substr(1);
fetch(`https://raw.githubusercontent.com/latinonetonline/linksdb/master/links/${hash}`)
.then(data => data.json())
    .then(data => window.location.href = data.Url)



