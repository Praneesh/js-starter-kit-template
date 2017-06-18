/**
    This file contains references to vendor libraries
    we are using in this project. This is used by webpack for
    production build only.

    We have seperated this, so as to have bundle with all the 3rd party
    libraries we have used in the project. This would help reducing the bandwidth
    as the 3rd party JS wouldnt change much relatively to our source code.

    Thus the end users would only download our changed code and the 3rd party libraries
    would be served from browse cache. The end users would only download vendor.js once
    and if there are would no frequent changes in the 3rd part libraries this vendor.js would be
    served from cache.

    Any files that are not referenced here will be bundled into main.js for production build.
 */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
