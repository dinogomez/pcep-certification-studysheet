console.log("dpaul-fetch.js called");

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

var object;

var div_contributors = document.getElementById("contributors");
fetch(
  "https://api.github.com/repos/dinogomez/pcep-certification-studysheet/contributors"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      // We don't know why this exist but removing this crashes the program.
      var str =
        "https://github.com/dinogomez/pcep-certification-studysheet/commits?author=" +
        element.login;
      div_contributors.innerHTML += `<div class="commit"><div class="author">
      <div class="gravatar">
        <img
          src="${element.avatar_url}"
          alt=""
          width="50px"
          height="50px"
        />
      </div>
      <div class="name">
        <a href="https://www.github.com/${element.id}" target="_blank"
          >${element.login}</a
        >
      </div>
     
    </div>
    <div class="message">
      <a href="${str}" target="_blank"><span class="text-dark">Contributions:</span> ${element.contributions}</a>
    </div>
  </div></div>`;
    });
  });

/**
 * 
[
  {
    "login": "dinogomez",
    "id": 41871666,
    "node_id": "MDQ6VXNlcjQxODcxNjY2",
    "avatar_url": "https://avatars.githubusercontent.com/u/41871666?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/dinogomez",
    "html_url": "https://github.com/dinogomez",
    "followers_url": "https://api.github.com/users/dinogomez/followers",
    "following_url": "https://api.github.com/users/dinogomez/following{/other_user}",
    "gists_url": "https://api.github.com/users/dinogomez/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/dinogomez/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/dinogomez/subscriptions",
    "organizations_url": "https://api.github.com/users/dinogomez/orgs",
    "repos_url": "https://api.github.com/users/dinogomez/repos",
    "events_url": "https://api.github.com/users/dinogomez/events{/privacy}",
    "received_events_url": "https://api.github.com/users/dinogomez/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 12
  },
  {
    "login": "nimbly-dev",
    "id": 61898119,
    "node_id": "MDQ6VXNlcjYxODk4MTE5",
    "avatar_url": "https://avatars.githubusercontent.com/u/61898119?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nimbly-dev",
    "html_url": "https://github.com/nimbly-dev",
    "followers_url": "https://api.github.com/users/nimbly-dev/followers",
    "following_url": "https://api.github.com/users/nimbly-dev/following{/other_user}",
    "gists_url": "https://api.github.com/users/nimbly-dev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nimbly-dev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nimbly-dev/subscriptions",
    "organizations_url": "https://api.github.com/users/nimbly-dev/orgs",
    "repos_url": "https://api.github.com/users/nimbly-dev/repos",
    "events_url": "https://api.github.com/users/nimbly-dev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nimbly-dev/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 1
  }
]

 * 
 * 
 * 
 */

/**
 <div class="author">
                  <div class="gravatar">
                    <img
                      src="https://www.gravatar.com/avatar/{{commit.author.gravatar_id}}?s={{commit.author.gravatar_size}}"
                      alt=""
                      width="{{commit.author.gravatar_size}}"
                      height="{{commit.author.gravatar_size}}"
                    />
                  </div>
                  <div class="name">
                    <a href="https://www.github.com/{{author.login}}" target="_blank"
                      >{{commit.author.name}}</a
                    >
                  </div>
                 
                </div>
                <div class="message">
                  <a href="{{html_url}}" target="_blank">{{commit.message}}</a>
                </div>
              </div>
 */
