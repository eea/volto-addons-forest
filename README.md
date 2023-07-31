# volto-addons-forest

[![Releases](https://img.shields.io/github/v/release/eea/volto-addons-forest)](https://github.com/eea/volto-addons-forest/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-addons-forest%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-addons-forest/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-addons-forest-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-addons-forest-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-addons-forest-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-addons-forest-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-addons-forest-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-addons-forest-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-addons-forest-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-addons-forest-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-addons-forest%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-addons-forest/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-addons-forest-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-addons-forest-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-addons-forest-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-addons-forest-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-addons-forest-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-addons-forest-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-addons-forest-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-addons-forest-develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-addons-forest with Docker

      git clone https://github.com/eea/volto-addons-forest.git
      cd volto-addons-forest
      make
      make start

Go to http://localhost:3000

### Add volto-addons-forest to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-addons-forest"
   ],

   "dependencies": {
       "@eeacms/volto-addons-forest": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-addons-forest
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-addons-forest/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-addons-forest/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-addons-forest/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
