## Notes File

### Setup
- Fixed table layout in README with proper ending bars to format properly.
- Updated `src/server.js` to use port 5002 as ports 5000 and 5001 were in use still from earlier running stuff.
- `npm install`
    ```aiignore
    # joe @ jedi in ~/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end on git:initial-setup [2024-12-26 16:11:12]
    : npm install
    npm warn old lockfile
    npm warn old lockfile The package-lock.json file was created with an old version of npm,
    npm warn old lockfile so supplemental metadata must be fetched from the registry.
    npm warn old lockfile
    npm warn old lockfile This is a one-time fix-up, please be patient...
    npm warn old lockfile
    npm warn deprecated is-data-descriptor@0.1.4: Please upgrade to v0.1.5
    npm warn deprecated is-accessor-descriptor@0.1.6: Please upgrade to v0.1.7
    npm warn deprecated is-accessor-descriptor@1.0.0: Please upgrade to v1.0.1
    npm warn deprecated is-data-descriptor@1.0.0: Please upgrade to v1.0.1
    npm warn deprecated is-data-descriptor@1.0.0: Please upgrade to v1.0.1
    npm warn deprecated is-accessor-descriptor@1.0.0: Please upgrade to v1.0.1
    npm warn deprecated is-data-descriptor@1.0.0: Please upgrade to v1.0.1
    npm warn deprecated is-accessor-descriptor@1.0.0: Please upgrade to v1.0.1
    npm warn deprecated is-data-descriptor@1.0.0: Please upgrade to v1.0.1
    npm warn deprecated is-accessor-descriptor@1.0.0: Please upgrade to v1.0.1
    npm warn deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
    npm warn deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
    npm warn deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
    npm warn deprecated source-map-url@0.4.0: See https://github.com/lydell/source-map-url#deprecated
    npm warn deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)

    added 371 packages, and audited 372 packages in 6s

    15 packages are looking for funding
      run `npm fund` for details

      29 vulnerabilities (4 low, 9 moderate, 15 high, 1 critical)

    To address issues that do not require attention, run:
      npm audit fix

    To address all issues (including breaking changes), run:
      npm audit fix --force

    Run `npm audit` for details.
    npm notice
    npm notice New major version of npm available! 10.8.2 -> 11.0.0
    npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.0.0
    npm notice To update run: npm install -g npm@11.0.0
    npm notice

    ```
- Start the app: `npm run start:dev`
    ```aiignore
    : npm run start:dev
    
    > starter-tracing-back-end@1.0.0 start:dev
    > nodemon src/server.js
    
    [nodemon] 2.0.6
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node src/server.js`
    node:events:498
          throw er; // Unhandled 'error' event
          ^
    
    Error: listen EADDRINUSE: address already in use :::5000
        at Server.setupListenHandle [as _listen2] (node:net:1902:16)
        at listenInCluster (node:net:1959:12)
        at Server.listen (node:net:2061:7)
        at Function.listen (/home/joe/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end/node_modules/express/lib/application.js:618:24)
        at Object.<anonymous> (/home/joe/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end/src/server.js:7:5)
        at Module._compile (node:internal/modules/cjs/loader:1504:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1588:10)
        at Module.load (node:internal/modules/cjs/loader:1282:32)
        at Module._load (node:internal/modules/cjs/loader:1098:12)
        at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    Emitted 'error' event on Server instance at:
        at emitErrorNT (node:net:1938:8)
        at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
      code: 'EADDRINUSE',
      errno: -98,
      syscall: 'listen',
      address: '::',
      port: 5000
    }
    
    Node.js v22.5.1
    [nodemon] app crashed - waiting for file changes before starting...
    [nodemon] restarting due to changes...
    [nodemon] starting `node src/server.js`
    Listening on Port https://localhost:5002!
    
    ```
- Run `npx knex migrate:list` ...
  - Ran into SSL error at first because I didn't include the `?ssl=true` at end of connection URL at first...
    ```aiignore
    : npx knex migrate:list
    Using environment: development
    error: SSL/TLS required
    at Parser.parseErrorMessage (/home/joe/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end/node_modules/pg-protocol/dist/parser.js:278:15)
    at Parser.handlePacket (/home/joe/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/home/joe/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/home/joe/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end/node_modules/pg-protocol/dist/index.js:10:42)
    at Socket.emit (node:events:520:28)
    at addChunk (node:internal/streams/readable:559:12)
    at readableAddChunkPushByteMode (node:internal/streams/readable:510:3)
    at Readable.push (node:internal/streams/readable:390:5)
    at TCP.onStreamRead (node:internal/stream_base_commons:191:23)
    ```
  - Because I was reusing the backend_chegg DB on render.com, I decided to copy in the previously migrated knex files to resolve the error below:
    ```aiignore
    : npx knex migrate:list
    Using environment: development
    Error: The migration directory is corrupt, the following files are missing: 20241213193233_createSuppliersTable.js, 20241213194941_createProductsTable.js, 20241213204943_createCategoriesTable.js, 20241213205201_createProductsCategoriesTable.js, 20241213222635_productsAddPriceAndChangeProductNameToProductTitle.js
        at validateMigrationList (/home/joe/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end/node_modules/knex/lib/migrate/Migrator.js:564:11)
        at Migrator.list (/home/joe/github/kernel528/Chegg-Skills/starters/starter-tracing-back-end/node_modules/knex/lib/migrate/Migrator.js:279:7)
        at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
        
    : cd ~/github/kernel528/Chegg-Skills/startes/starter-node-express-postgresql/src/db/migrations
    : cp  20241213193233_createSuppliersTable.js 20241213194941_createProductsTable.js 20241213204943_createCategoriesTable.js 20241213205201_createProductsCategoriesTable.js 20241213222635_productsAddPriceAndChangeProductNameToProductTitle.js ../../../../starter-tracing-back-end/src/db/migrations
    
    : npx knex migrate:list
    Using environment: development
    Found 5 Completed Migration file/files.
    20241213193233_createSuppliersTable.js 
    20241213194941_createProductsTable.js 
    20241213204943_createCategoriesTable.js 
    20241213205201_createProductsCategoriesTable.js 
    20241213222635_productsAddPriceAndChangeProductNameToProductTitle.js 
    Found 1 Pending Migration file/files.
    20201213083928_createArticlesTable.js 
    ```
- Ran `npx knex migrate:latest`
    ```aiignore
    : npx knex migrate:latest
    Using environment: development
    Batch 2 run: 1 migrations
    ```
- Ran `npx knex seed:run`
    ```aiignore
    : npx knex seed:run
    Using environment: development
    Ran 1 seed files
    ```
## Module Steps
- Install [pino-http](https://github.com/pinojs/pino-http) and update src/app.js (module steps)
```aiignore
: npm install pino-http@5

added 2 packages, changed 5 packages, and audited 374 packages in 3s

15 packages are looking for funding
  run `npm fund` for details

29 vulnerabilities (4 low, 9 moderate, 15 high, 1 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```
- Install `nanoid` package to convert numeric pino loglevel codes to string.  Create the src/config/logger.js and update src/app.js.
```aiignore
npm install nano@3
: npm install pino-http@5

added 2 packages, changed 5 packages, and audited 374 packages in 3s

15 packages are looking for funding
  run `npm fund` for details

29 vulnerabilities (4 low, 9 moderate, 15 high, 1 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
# joe @ jedi in ~/github/kernel528/Chegg-Skills/backend-web-dev-cert/Module_3-Backend-Web-Development/3.12_Putting-it-all-Together/06-Practice-Tracing-Errors/starter-tracing-back-end on git:initial-setup x [2024-12-26 16:43:14]
: git s
On branch initial-setup
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Notes.md
        modified:   package-lock.json
        modified:   package.json

no changes added to commit (use "git add" and/or "git commit -a")
# joe @ jedi in ~/github/kernel528/Chegg-Skills/backend-web-dev-cert/Module_3-Backend-Web-Development/3.12_Putting-it-all-Together/06-Practice-Tracing-Errors/starter-tracing-back-end on git:initial-setup x [2024-12-26 16:44:55]
: git add package*
# joe @ jedi in ~/github/kernel528/Chegg-Skills/backend-web-dev-cert/Module_3-Backend-Web-Development/3.12_Putting-it-all-Together/06-Practice-Tracing-Errors/starter-tracing-back-end on git:initial-setup x [2024-12-26 16:45:02]
: git commit -m "Updated with pino-http package."
[initial-setup 0954f4a] Updated with pino-http package.
 2 files changed, 40 insertions(+), 22 deletions(-)
# joe @ jedi in ~/github/kernel528/Chegg-Skills/backend-web-dev-cert/Module_3-Backend-Web-Development/3.12_Putting-it-all-Together/06-Practice-Tracing-Errors/starter-tracing-back-end on git:initial-setup x [2024-12-26 16:45:14]
: npm install nano@3
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'hawk@0.10.2',
npm warn EBADENGINE   required: { node: '0.8.x' },
npm warn EBADENGINE   current: { node: 'v22.5.1', npm: '10.8.2' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'hoek@0.7.6',
npm warn EBADENGINE   required: { node: '0.8.x' },
npm warn EBADENGINE   current: { node: 'v22.5.1', npm: '10.8.2' }
npm warn EBADENGINE }
npm warn deprecated node-uuid@1.4.8: Use uuid module instead
npm warn deprecated sntp@0.1.2: This module moved to @hapi/sntp. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
npm warn deprecated boom@0.3.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm warn deprecated hoek@0.7.6: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm warn deprecated cryptiles@0.1.0: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm warn deprecated hoek@0.4.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm warn deprecated hoek@0.4.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm warn deprecated hawk@0.10.2: This module moved to @hapi/hawk. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
npm warn deprecated request@2.16.6: request has been deprecated, see https://github.com/request/request/issues/3142

added 26 packages, and audited 400 packages in 5s

15 packages are looking for funding
  run `npm fund` for details

41 vulnerabilities (4 low, 11 moderate, 23 high, 3 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

```
- 


  