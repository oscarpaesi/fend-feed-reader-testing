/**
 * feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/**
 * We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /**
     * @description Test suite for the allFeeds variable.
     */
    describe('RSS Feeds', function() {

        /**
         * @description Ensures that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * @description Ensures that every feed has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function () {
            for (const feed of allFeeds) {
                // Make sure the URL is defined, not null, and not empty
                expect(feed.url).toBeTruthy();
            }
        });


        /**
         * @description Ensures that every feed has a name defined
         * and that the name is not empty.
         */
        it('have names', function () {
            for (const feed of allFeeds) {
                // Make sure the name is defined, not null, and not empty
                expect(feed.name).toBeTruthy();
            }
        });
    });

    /**
     * @description Test suite for the Menu.
     */
    describe('The Menu', function() {

        /**
         * @description Ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            const body = $('body').get(0);
            expect(body).toHaveClass('menu-hidden');
        });

         /**
          * @description Ensures the menu changes
          * visibility when it is clicked.
          */
         it('is displayed when the icon is clicked, and hidden when the icon is clicked again', function() {
            const body = $('body').get(0);
            const menuIcon = $('.menu-icon-link');

            spyOn(menuIcon, 'click').and.callThrough();

            // Click once
            menuIcon.click();
            expect(body).not.toHaveClass('menu-hidden');

            // Click again
            menuIcon.click();
            expect(body).toHaveClass('menu-hidden');
         });
    });

    /**
     * @description Test suite for the initial entries.
     */
    describe('Initial entries', function() {

        /**
         * @description Call loadFeed with the default
         * feed and wait for it to complete.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /**
         * @description Ensures there is at least one entry in the list.
         */
        it('are loaded in the feed', function() {
            const entryList = $('.feed .entry');
            expect(entryList.length).toBeGreaterThan(0);
        });
    });

    /**
     * @description Test suite for the selection of a new feed.
     */
    describe('New Feed Selection', function() {

        let initialContent;

        /**
         * @description Call loadFeed with a non-default feed,
         * keep the content, then call loadFeed again with the
         * default feed. Wait for everything to complete.
         */
        beforeEach(function(done) {

            // Load a initial feed
            loadFeed(1, function() {

                // Store the content of the initial feed
                initialContent = $('.feed').html();

                // Load a different feed
                loadFeed(0, done);
            });
        });

        /**
         * @description Ensures the content of the feed has changed
         * after a different feed has been chosen.
         */
        it('changes the content of the feed', function() {
            const currentContent = $('.feed').html();
            expect(currentContent).not.toBe(initialContent);
        });
    });
}());
