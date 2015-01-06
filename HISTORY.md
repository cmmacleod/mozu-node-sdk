[0.9.2](https://github.com/Mozu/mozu-javascript-sdk/releases/tag/v0.9.2) / 2015-01-06
-------------------------------------------------------------------------------------

*   **Added** Security methods for testing SHA hashes
*   **Changed** Made testing pattern more modular
*   **Removed** Nock-generated test fixtures, which were more trouble than they were worth.
*   **Changed** Stopped all calls from automatically including user claims.
*   **Changed** Updated how the tenant URL is generated.

[0.9.1](https://github.com/Mozu/mozu-javascript-sdk/releases/tag/v0.9.1) / 2014-09-02
-------------------------------------------------------------------------------------

*   **Changed** Everything. Ground-up rewrite to resemble the other SDKs more. 
*   **Changed** Client methods changed to return flat JSON instead of rich objects.
*   **Added** Authentication management.
*   **Added** Code generation with CodeZu.
*   **Added** Testing with Mocha and Nock.

[0.3.0](https://github.com/Mozu/mozu-javascript-sdk/releases/tag/v0.3.0) / 2014-01-20
-------------------------------------------------------------------------------------

*   **Added** Put on Github
*   **Changed** Build process refactored to use browserify
*   **Changed** As a result of above, SDK is now compatible with NodeJS >=0.10
*   **Changed** Cart summary turned into its own type instead of a method on Cart