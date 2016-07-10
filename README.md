# Slide Deck
Slide Deck is a [Cosmic JS](https://cosmicjs.com) example app.  It is built on top of the [Impress.js](https://github.com/impress/impress.js) presentation framework and runs on a light Node.js server that pulls content from the Cosmic JS content API.  View a demo [here](http://slide-deck.cosmicapp.co/).

## Getting started
To run locally:
```
git clone https://github.com/cosmicjs/cosmicapp-slide-deck
cd cosmicapp-slide-deck
npm install
npm start
```
Go to http://localhost:3000

## Create your own slide deck
[Sign up for Cosmic JS](https://cosmicjs.com) to install this app and edit the content.  Then connect to your Cosmic JS bucket:
```
COSMIC_BUCKET=your-bucket-slug npm start
```
