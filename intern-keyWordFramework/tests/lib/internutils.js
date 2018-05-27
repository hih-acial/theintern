var fs = require('fs');
const { assert } = intern.getPlugin('chai');
var keys = require('@theintern/leadfoot/keys').default;
var jsonQuery = require('json-query');

const app = require('./appconfig.js');
const logger = require('./log.js');
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

/*
 using The element retrieval strategy to use. One of 'class name', 'css selector', 'id', 'name', 'link text', 'partial link text', 'tag name', 'xpath'.
*/
async function getElement (uiObject) {
    await logArguments ('getElement id/xpath/name/css : ', uiObject.id, uiObject.xpath, uiObject.name, uiObject.css);
    let element;
    if ( (typeof(uiObject.id)!='undefined') && (uiObject.id.length>0)) {
        logger.info ('Object found by id :' + uiObject.id)
        return ([await app.browser().findById(uiObject.id), 'id', uiObject.id]);
    }
    if ( (typeof(uiObject.xpath)!='undefined') && (uiObject.xpath.length>0)) {
        logger.info ('Object found by xpath :' + uiObject.xpath)
        return ([await app.browser().findByXpath(uiObject.xpath), 'xpath', uiObject.xpath]);
    }
    if ( (typeof(uiObject.name)!='undefined') && (uiObject.name.length>0)) {
        logger.info ('Object found by name :' + uiObject.name)
        return ([await app.browser().findByName(uiObject.name), 'name', uiObject.name]);
    }
    if ( (typeof(uiObject.css)!='undefined') && (uiObject.css.length>0)) {
        logger.info ('Object found by css :' + uiObject.css)
        return ([await app.browser().findByCssSelector(uiObject.css), 'css', uiObject.css]);
    }
    logger.error ('Selector not supported for element : '  + uiObject.logicalname);
    return element;
}
var logArguments = async ( ...params) => {
    await logger.info ('Call to function : ' + params.join(' - '));
}
var type = async (uiObjectName, text) => {
    await logArguments ('type', app.page, uiObjectName, text);
    let element = await findObject (app.page, uiObjectName);
    
    await element[0].type(text);
}

var click = async (uiObjectName) => {
    await logArguments ('click', app.page, uiObjectName);
    let element = await findObject (app.page, uiObjectName);
    try {
        await app.browser().findDisplayed(element[1], element[2])
        await element[0].click();
    }
    catch (err) {
        logger.error('object not displayed');
    }
}
var autocomplete = async (uiObjectName, text) => {
    await logArguments ('autocomplete', app.page, uiObjectName, text);
    let element = await findObject (app.page, uiObjectName);
    await sleep(1000);
    await element[0].click();
    await sleep(1000);
    await app.browser().pressKeys(text);
    await sleep(1000);
    await app.browser().pressKeys(keys.ARROW_DOWN);
    await app.browser().pressKeys(keys.ENTER);
}
var verifyText = async (uiObjectName, expectedtext) =>{
    await logArguments ('verifyText', app.page, uiObjectName, expectedtext);
    let element = await findObject (app.page, uiObjectName);
    let text = await element[0].getVisibleText();
    logger.debug ('Visisble texte of ' + uiObjectName + ' ' + text + ' expected is ' + expectedtext);
    assert.strictEqual(text, expectedtext);
}

var domSearch =async (searchpage, searchobject) => {
    logArguments ('domSearch', searchpage, searchobject);
    let file = __dirname + '\\..\\orangehrm.json';
    var pages =await JSON.parse(fs.readFileSync(file, 'utf8'));
    return (await jsonQuery(`Pages[${searchpage}][logicalname=${searchobject}]`, {data: pages}).value);

}
var findObject =async (searchpage, searchobject) => {
    logArguments ('findObject', searchpage, searchobject);
    let uiObject = await domSearch (searchpage, searchobject);
    try {
        element = await getElement (uiObject);
    }
    catch (err) {
        if (err.name.localeCompare('NoSuchElement')===0) {
            uiObject.id = "";
            logger.warn (err);
            element = await getElement (uiObject);
        }
        else {
            logger.error (err);
            throw (err);
        }
    }
    return (element);
}
module.exports = {logArguments, type, autocomplete, click, verifyText};