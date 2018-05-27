class app {
    static setBrowser(driver) {
        this.driver= driver;
    }
    static browser() {
        return (this.driver);
    }
    static setCurrentPage(page) {
        this.page= page;
    }
    static page() {
        return (this.page);
    }
}

module.exports = app;
