Quick Start
-----------

```bash
npm install
npm start

Steps:
25/09/2018 - app2
~~~~~~~~~~
cd app2
git init
git add .
git commit -m "origin"
git checkout -b step1

//add and update new code
// check in localhost :3000

git diff --name-only
git add . 
git commit -m "xxxxx"
git checkout -b step2

// componentWillMount -> render -> componentDidMount (RESR call, Ajax, Promise) -> componentWillUnMount (trash cahce) > componentDidUnMount