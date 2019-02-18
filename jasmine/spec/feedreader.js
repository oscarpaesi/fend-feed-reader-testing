/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*
         * Ensures each feed has a URL defined
         * and that the URL is not empty.
         */
        it('have URL', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toBeTruthy();
            }
        });


        /*
         * Ensures that each feed has a name defined
         * and that the name is not empty.
         */
        it('have names', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).toBeTruthy();
            }
        });
    });

    /**
     * @description Test suite for the Menu
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
     * @description Test suite for the initial entries
     */
    describe('Initial entries', function() {

        /**
         * @description Call loadFeed and wait for it to complete
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /**
         * @description Ensures there is at least one entry in the list.
         */
        it('there is at least one entry loaded in the feed list', function() {
            const entryList = $('.feed .entry');
            expect(entryList.length).toBeGreaterThan(0);
        });
    });

    /**
     * @description Test suite for the selection of a new feed
     */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
