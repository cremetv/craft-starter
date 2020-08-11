<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => App::env('SECURITY_KEY'),

        // prevent umlauts in slugs
        'limitAutoSlugsToAscii' => true,

        'aliases' => [
          '@baseUrl' => 'https://name.de',
          '@baseRoot' => dirname(__DIR__) . '/web',
          '@baseAssets' => '@baseRoot/public',
          '@staticAssetsVersion' => '0.0.1',
        ],
    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,

        'aliases' => [
          '@baseUrl' => 'http://name.test',
        ]
    ],

    // Staging environment settings
    'staging' => [
        // Set this to `false` to prevent administrative changes from being made on staging
        'allowAdminChanges' => true,
        'allowUpdates' => false,

        'aliases' => [
          '@baseUrl' => 'http://name.homepage-vorschau.com',
        ],
    ],

    // Production environment settings
    'production' => [
        // Set this to `false` to prevent administrative changes from being made on production
        'allowAdminChanges' => true,
        'allowUpdates' => false,

        'aliases' => [
          '@baseUrl' => 'https://name.de'
        ],
    ],
];
