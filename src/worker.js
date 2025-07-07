export default {
    async fetch(request) {
      const url = new URL(request.url);
      const path = url.pathname;
  
      const githubUser = "doi2523";
      const repo = "locketcdn";
      const branch = "main";
  
      const targetUrl = `https://cdn.jsdelivr.net/gh/${githubUser}/${repo}@${branch}${path}`;
      return fetch(targetUrl);
    },
  };
  